import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { householdMetadataResolver } from './household-metadata-resolver';

describe('householdMetadataResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => householdMetadataResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
