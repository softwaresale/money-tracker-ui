import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { settlementDataResolver } from './settlement-data-resolver';

describe('settlementDataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => settlementDataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
