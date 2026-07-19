import { Component, input } from '@angular/core';
import { HlmCardImports } from '@spartan-ng/helm/card';

@Component({
  selector: 'app-summary-card',
  imports: [
    HlmCardImports,
  ],
  templateUrl: './summary-card.html',
  styleUrl: './summary-card.css',
})
export class SummaryCard {

  readonly title = input.required<string>();
  readonly description = input<string>('');
}
