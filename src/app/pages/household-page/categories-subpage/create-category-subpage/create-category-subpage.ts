import { Component, inject, input, signal } from '@angular/core';
import { form, maxLength, required, FormRoot, FormField, TreeValidationResult } from '@angular/forms/signals';
import { Router } from '@angular/router';
import { ExpenseCategory, ExpenseCategoryCreateRequest, ExpenseCategoryService } from '@api-client';
import { toast } from '@spartan-ng/brain/sonner';
import { HlmButton } from "@spartan-ng/helm/button";
import { HlmFieldGroup, HlmField, HlmFieldLabel } from "@spartan-ng/helm/field";
import { HlmInput } from "@spartan-ng/helm/input";
import { HlmSpinner } from '@spartan-ng/helm/spinner';
import { firstValueFrom, map, tap } from 'rxjs';

@Component({
  selector: 'app-create-category-subpage',
  imports: [HlmButton, FormRoot, HlmFieldGroup, HlmField, HlmFieldLabel, HlmInput, FormField, HlmSpinner],
  templateUrl: './create-category-subpage.html',
  styleUrl: './create-category-subpage.css',
})
export class CreateCategorySubpage {

  private readonly expenseCategoryService = inject(ExpenseCategoryService);
  private readonly router = inject(Router);

  readonly householdId = input.required<string>();

  private readonly categoryModel = signal({
    name: '',
    description: '',
    color: '#000000'
  });

  readonly form = form(
    this.categoryModel,
    (schemaPath) => {
      required(schemaPath.name, { message: 'Name is required' });
      maxLength(schemaPath.name, 20, { message: 'Name must be at most 20 characters' });

      maxLength(schemaPath.description, 80, { message: 'Description must be at most 80 characters' });
    },
    {
      submission: {
        action: async (field, detail) => {

          const formValue = field().value();

          const dto = {
            name: formValue.name,
            description: formValue.description,
            color: formValue.color,
          } satisfies ExpenseCategoryCreateRequest;

          const request$ = this.expenseCategoryService.createExpenseCategoryForHousehold(this.householdId(), dto).pipe(
            tap({
              next: (value) => {
                toast.success('Successfully created category');
                this.router.navigate(['/households', this.householdId(), 'categories']);
              },
              error: err => {
                toast.error(`Failed to create category: ${err}`);
              }
            }),
            map<ExpenseCategory, TreeValidationResult>(() => ({ kind: 'success' }))
          );

          return firstValueFrom(request$);
        },
      }
    }
  );
}
