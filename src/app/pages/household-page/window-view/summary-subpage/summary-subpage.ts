import { Component, inject, input } from '@angular/core';
import { WindowSummaryResource } from '@api-client';
import { WindowSummaryView } from "../../../../shared/window-summary-view/window-summary-view";
import { HlmSpinner } from "@spartan-ng/helm/spinner";

@Component({
  selector: 'app-summary-subpage',
  imports: [WindowSummaryView, HlmSpinner],
  templateUrl: './summary-subpage.html',
  styleUrl: './summary-subpage.css',
})
export class SummarySubpage {

  private readonly summaryResources = inject(WindowSummaryResource);

  readonly windowId = input.required<string>();

  protected readonly summary = this.summaryResources.getWindowSummaryByGuid(this.windowId);
}
