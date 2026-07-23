import { Injectable } from '@angular/core';

export type PreferenceKey =
  'moneytracker:preferences:defaultHousehold'

@Injectable({
  providedIn: 'root',
})
export class PreferencesService {
  
  storeItem(key: PreferenceKey, value: any) {
    const storageValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, storageValue);
  }

  getItem<T>(key: PreferenceKey): T | null {
    const data = localStorage.getItem(key);
    if (!data) {
      return null;
    }

    try {
      return JSON.parse(data) as T;
    } catch {
      return data as unknown as T;
    }
  }

  removeItem(key: PreferenceKey) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
