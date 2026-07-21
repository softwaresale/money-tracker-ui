import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { WindowSettle, WindowSettlementService } from '@api-client';

export const settlementDataResolver: ResolveFn<WindowSettle> = (route, state) => {
  const windowId = route.paramMap.get('windowId');
  if (!windowId) {
    throw new Error("no windowId found in route");
  }

  const windowSettleService = inject(WindowSettlementService);

  return windowSettleService.getWindowSettlementData(windowId);
};
