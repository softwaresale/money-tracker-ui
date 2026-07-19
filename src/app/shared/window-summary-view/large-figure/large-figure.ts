import { Component, input } from '@angular/core';
import { DollarAmount } from '@api-client';
import { DollarAmountPipe } from "../../dollar-amount-pipe";
import { HlmH1 } from "@spartan-ng/helm/typography";

@Component({
  selector: 'app-large-figure',
  imports: [DollarAmountPipe, HlmH1],
  templateUrl: './large-figure.html',
  styleUrl: './large-figure.css',
})
export class LargeFigure {

  readonly amount = input.required<DollarAmount>();
}
