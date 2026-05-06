import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdExpensesPage } from './household-expenses-page';

describe('HouseholdExpensesPage', () => {
  let component: HouseholdExpensesPage;
  let fixture: ComponentFixture<HouseholdExpensesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdExpensesPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseholdExpensesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
