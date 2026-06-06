import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { windowResolver } from './window-resolver';

describe('windowResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => windowResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
