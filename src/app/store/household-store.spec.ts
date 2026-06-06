import { TestBed } from '@angular/core/testing';

import { HouseholdStore } from './household-store';

describe('HouseholdStore', () => {
  let service: HouseholdStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HouseholdStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
