import { Component, inject, input, signal } from '@angular/core';
import { form, maxLength, min, required, FormRoot, FormField, TreeValidationResult } from '@angular/forms/signals';
import { SubpageContainer } from "../../../../shared/subpage/subpage-container";
import { HlmFieldImports } from '@spartan-ng/helm/field';
import { HlmInput } from '@spartan-ng/helm/input';
import { HlmButton } from '@spartan-ng/helm/button';
import { HlmH3 } from "@spartan-ng/helm/typography";
import { HlmInputGroupImports } from "@spartan-ng/helm/input-group";
import { ExpenseCategoryResource, FixedExpenseCreateRequest, FixedExpenseMetadata, FixedExpenseService, HouseholdResource } from '@api-client';
import { HlmNativeSelect, HlmNativeSelectOption } from "@spartan-ng/helm/native-select";
import { HlmIcon } from "@spartan-ng/helm/icon";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { HlmSpinner } from '@spartan-ng/helm/spinner';
import { lucidePlusCircle } from '@ng-icons/lucide';
import { numberToDollarAmount } from '../../../../shared/dollar-amount-utils';
import { firstValueFrom, map, tap } from 'rxjs';
import { toast } from '@spartan-ng/brain/sonner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixed-expense-create',
  imports: [
    SubpageContainer,
    HlmFieldImports,
    HlmInput,
    HlmButton,
    FormRoot,
    FormField,
    HlmH3,
    HlmInputGroupImports,
    HlmNativeSelect,
    HlmNativeSelectOption,
    HlmIcon,
    NgIcon,
    HlmSpinner,
  ],
  templateUrl: './fixed-expense-create.html',
  styleUrl: './fixed-expense-create.css',
  providers: [
    provideIcons({
      add: lucidePlusCircle,
    })
  ]
})
export class FixedExpenseCreate {

  private readonly expenseCategoryResources = inject(ExpenseCategoryResource);
  private readonly householdResource = inject(HouseholdResource);
  private readonly fixedExpenseService = inject(FixedExpenseService);
  private readonly router = inject(Router);

  readonly householdId = input.required<string>();

  protected readonly expenseCategories = this.expenseCategoryResources.getExpenseCategoriesForHousehold(this.householdId);
  protected readonly householdMembers = this.householdResource.getHouseholdMembers(this.householdId);

  private readonly fixedExpenseModel = signal({
    description: '',
    amount: 0,
    categoryGuid: '',
    defaultPaidByUID: '',
  });

  readonly form = form(
    this.fixedExpenseModel,
    schemaPath => {
      required(schemaPath.description, { message: 'Description is required' });
      maxLength(schemaPath.description, 40, { message: 'Description must be at most 40 characters long' });

      required(schemaPath.amount, { message: 'Amount is required' });
      min(schemaPath.amount, 0, { message: 'Amount must be a positive number' });
    },
    {
      submission: {
        action: async (field, event) => {
          const formValue = field().value();
          
          const request: FixedExpenseCreateRequest = {
            description: formValue.description,
            amount: numberToDollarAmount(formValue.amount),
            categoryGuid: formValue.categoryGuid,
            defaultPaidByUID: formValue.defaultPaidByUID,
          }

          const request$ = this.fixedExpenseService.createFixedExpenseForHousehold(this.householdId(), request)
          .pipe(
            tap({
              next: (fixedExpense) => {
                toast.success(`Successfully created fixed expense`);
                // TODO navigate to actual page
                this.router.navigate(['/', 'households', this.householdId(), 'fixed-expenses']);
              },
              error: err => {
                toast.error(`Failed to create fixed expense: ${err.message}`);
              }
            }),
            map<FixedExpenseMetadata, TreeValidationResult>(response => ({ kind: 'success' })),
          );

          return firstValueFrom(request$);
        }
      }
    }
  );
}
