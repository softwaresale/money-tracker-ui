import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowSummaryView } from './window-summary-view';

describe('WindowSummaryView', () => {
  let component: WindowSummaryView;
  let fixture: ComponentFixture<WindowSummaryView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WindowSummaryView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindowSummaryView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
