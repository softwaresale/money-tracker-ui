import { DatePipe } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { WindowSettle, WindowSettlementService } from '@api-client';
import { HlmH3, HlmLead } from "@spartan-ng/helm/typography";
import { PaymentCard } from "./payment-card/payment-card";
import { UserContributionCard } from "./user-contribution-card/user-contribution-card";
import { HlmButton } from "@spartan-ng/helm/button";
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideWalletCards } from '@ng-icons/lucide';
import { HlmIcon } from "@spartan-ng/helm/icon";
import { Router } from '@angular/router';
import { HlmSpinner } from "@spartan-ng/helm/spinner";
import { toast } from '@spartan-ng/brain/sonner';

@Component({
  selector: 'app-settle-view',
  imports: [DatePipe, HlmH3, HlmLead, PaymentCard, UserContributionCard, HlmButton, HlmIcon, NgIcon, HlmSpinner],
  templateUrl: './settle-view.html',
  styleUrl: './settle-view.css',
  providers: [
    provideIcons({
      settleUp: lucideWalletCards
    })
  ]
})
export class SettleView {

  private readonly router = inject(Router);
  private readonly windowSettlementService = inject(WindowSettlementService);

  readonly householdId = input.required<string>();
  readonly windowId = input.required<string>();
  readonly settleData = input.required<WindowSettle>();

  protected readonly loading = signal(false);

  protected readonly windowStartDate = computed(() => this.settleData().window.startDate);
  protected readonly windowPaid = computed(() => !!this.settleData().window.paidDate);
  protected readonly showSettleAction = computed(() => !this.windowPaid());

  protected readonly payments = computed(() => this.settleData().payments);
  protected readonly contributions = computed(() => this.settleData().breakdown);

  settleWindowAndCreateNew() {
    console.log('starting operation')
    this.loading.set(true);

    this.windowSettlementService.settleWindowAndCreateNew(this.windowId()).subscribe({
      next: createdWindow => {
        toast.success('Successfully closed window');
        this.loading.set(false);
        this.router.navigate([ '/households', this.householdId(), 'window', createdWindow.guid ]);
      },
      error: err => {
        toast.error(err);
        console.error(err);
        this.loading.set(false);
      }
    })

  }
}
