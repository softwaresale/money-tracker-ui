import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedExpenseSubpage } from './fixed-expense-subpage';

describe('FixedExpenseSubpage', () => {
  let component: FixedExpenseSubpage;
  let fixture: ComponentFixture<FixedExpenseSubpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedExpenseSubpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedExpenseSubpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
