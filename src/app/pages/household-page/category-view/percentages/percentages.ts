import { Component, input } from '@angular/core';
import { ExpenseCategoryPercentage } from '@api-client';
import { HlmSliderImports } from '@spartan-ng/helm/slider';

@Component({
  selector: 'app-percentages',
  imports: [HlmSliderImports, ],
  templateUrl: './percentages.html',
  styleUrl: './percentages.css',
})
export class Percentages {

  readonly percentages = input.required<ExpenseCategoryPercentage[]>();
  readonly disabled = input(true);

  updateMemberPercentages(changedIndex: number, newValue: number) {

    /*
    this.userValues.update(snapshot => {

      const currentValues = snapshot.map(rec => rec.amount);
      const currentSum = currentValues.reduce((sum, val) => sum + val, 0);
      const oldValue = currentValues[changedIndex];

      // Set the explicitly moved slider
      currentValues[changedIndex] = newValue;

      // Calculate how much we need to distribute across the other sliders
      const remainder = 100 - newValue;
      const previousOtherSum = currentSum - oldValue;

      // Proportional update
      if (previousOtherSum > 0) {
        currentValues.forEach((val, i) => {
          if (i !== changedIndex) {
            currentValues[i] = Math.round((val / previousOtherSum) * remainder);
          }
        });
      }

      return currentValues.map((updatedValue, idx) => ({ name: snapshot[idx].name, amount: updatedValue }));
    });
     */
  }
}
