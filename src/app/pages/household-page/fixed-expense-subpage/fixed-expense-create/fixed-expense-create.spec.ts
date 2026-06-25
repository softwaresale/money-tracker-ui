import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedExpenseCreate } from './fixed-expense-create';

describe('FixedExpenseCreate', () => {
  let component: FixedExpenseCreate;
  let fixture: ComponentFixture<FixedExpenseCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FixedExpenseCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedExpenseCreate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
