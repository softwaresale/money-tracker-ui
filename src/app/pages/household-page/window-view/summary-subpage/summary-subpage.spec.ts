import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummarySubpage } from './summary-subpage';

describe('SummarySubpage', () => {
  let component: SummarySubpage;
  let fixture: ComponentFixture<SummarySubpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummarySubpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummarySubpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
