import { Injectable, resource, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HouseholdStore {

  private readonly currentHousehold = signal<>();
}
