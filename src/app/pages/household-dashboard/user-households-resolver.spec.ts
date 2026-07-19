import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { userHouseholdsResolver } from './user-households-resolver';

describe('userHouseholdsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => userHouseholdsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
