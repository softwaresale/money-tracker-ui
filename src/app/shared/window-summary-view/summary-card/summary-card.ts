import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
  selector: 'app-summary-card',
  imports: [
    HlmCardImports,
  ],
  templateUrl: './summary-card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './summary-card.css',
})
export class SummaryCard {

  readonly title = input.required<string>();
  readonly description = input<string>('');
}
