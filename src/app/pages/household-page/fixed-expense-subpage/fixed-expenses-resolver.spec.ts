import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { fixedExpensesResolver } from './fixed-expenses-resolver';

describe('fixedExpensesResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => fixedExpensesResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
