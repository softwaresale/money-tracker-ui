import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableExpenseFormSubpage } from './variable-expense-form-subpage';

describe('VariableExpenseFormSubpage', () => {
  let component: VariableExpenseFormSubpage;
  let fixture: ComponentFixture<VariableExpenseFormSubpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableExpenseFormSubpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableExpenseFormSubpage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
