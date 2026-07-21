import { Component, computed, input } from '@angular/core';
import { WindowSettlePayment } from '@api-client';
import { HlmCard, HlmCardContent } from "@spartan-ng/helm/card";
import { HlmLarge, HlmH1 } from "@spartan-ng/helm/typography";
import { HlmIcon } from "@spartan-ng/helm/icon";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideArrowRight, lucideCircleDollarSign } from '@ng-icons/lucide';
import { DollarAmountPipe } from "../../../../../shared/dollar-amount-pipe";

@Component({
  selector: 'app-payment-card',
  imports: [HlmCard, HlmCardContent, HlmLarge, HlmIcon, NgIcon, DollarAmountPipe, HlmH1],
  templateUrl: './payment-card.html',
  styleUrl: './payment-card.css',
  providers: [
    provideIcons({
      rightArrow: lucideArrowRight,
      money: lucideCircleDollarSign,
    })
  ]
})
export class PaymentCard {

  readonly payment = input.required<WindowSettlePayment>();

  readonly payersName = computed(() => `${this.payment().payer.givenName} ${this.payment().payer.familyName}`);
  readonly payeesName = computed(() => `${this.payment().payee.givenName} ${this.payment().payee.familyName}`);

  readonly amount = computed(() => this.payment().amount);
}
