import { Component, computed, inject, input, linkedSignal } from '@angular/core';
import { AuthService } from '@edgeflare/ngx-oidc';
import { VariableExpenseCreateRequest, ExpenseCategoryResource, VariableExpenseService, VariableExpense } from '@api-client';
import { Router } from '@angular/router';
import { toast } from '@spartan-ng/brain/sonner';
import { form, FormField, FormRoot, maxLength, min, required, TreeValidationResult, WithOptionalFieldTree } from '@angular/forms/signals';
import { firstValueFrom, map, tap } from 'rxjs';
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmDatePickerImports } from '@spartan-ng/helm/date-picker';
import { HlmNativeSelectImports } from '@spartan-ng/helm/native-select';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmSpinner } from "@spartan-ng/helm/spinner";

@Component({
  selector: 'app-variable-expense-form-subpage',
  imports: [
    FormRoot,
    FormField,
    HlmFieldImports,
    HlmInputGroupImports,
    HlmDatePickerImports,
    HlmNativeSelectImports,
    HlmInput,
    HlmButton,
    HlmSpinner,
    HlmDatePickerImports,    
  ],
  templateUrl: './variable-expense-form-subpage.html',
  styleUrl: './variable-expense-form-subpage.css',
})
export class VariableExpenseFormSubpage {
  
  private readonly authService = inject(AuthService);
  private readonly expenseCategoryResources = inject(ExpenseCategoryResource);
  private readonly variableExpenseService = inject(VariableExpenseService);
  private readonly router = inject(Router);
  
  readonly householdId = input.required<string>();
  readonly windowId = input.required<string>();
  
  protected readonly categories = this.expenseCategoryResources.getExpenseCategoriesForHousehold(this.householdId);
  
  protected readonly currentUserID = computed(() => this.authService.user()?.profile.sub ?? '');
  
  private readonly variableExpenseModel = linkedSignal(() => ({
    description: '',
    paidByUserID: this.currentUserID(),
    amount: 0,
    categoryGuid: '',
    paidOn: new Date(Date.now()),
  }));
  
  readonly form = form(
    this.variableExpenseModel,
    (schemaPath) => {
      required(schemaPath.description, { message: 'Description is required' });
      maxLength(schemaPath.description, 40, { message: 'Description must be at most 40 characters' });
      
      required(schemaPath.amount, { message: 'Amount is required' });
      min(schemaPath.amount, 0, { message: 'Amount must be greater than zero' });
      
      required(schemaPath.paidOn, { message: 'Paid on date is required' });
    },
    {
      submission: {
        action: async (field, detail) => {
          const formValue = field().value();
          
          const { dollars, cents } = splitDollarsCents(formValue.amount);
          
          const createRequest = {
            description: formValue.description,
            amount: {
              dollars, cents
            },
            paidOn: formValue.paidOn.toISOString(), 
            categoryGuid: formValue.categoryGuid,
            paidByUserID: formValue.paidByUserID,
          } satisfies VariableExpenseCreateRequest;
          
          const response$ = this.variableExpenseService.createVariableExpense(this.windowId(), createRequest).pipe(
            tap({
              next: (value) => {
                toast.success('Successully created expense');
                this.router.navigate(['/', 'households', this.householdId(), 'window', this.windowId()]);
              },
              error: err => {
                console.error(`failed to create expense: ${err}`);
                toast.error(`Failed to create expense: ${err}`);
              }
            }),
            map<VariableExpense, TreeValidationResult>(response => ({ kind: 'success' })),
          );

          return firstValueFrom(response$);
        }
      }
    }
  );
}


const splitDollarsCents = (amount: number): { dollars: number; cents: number } => {
  const [dollars, cents] = amount.toFixed(2).split('.');
  return { dollars: parseInt(dollars), cents: parseInt(cents) };
}