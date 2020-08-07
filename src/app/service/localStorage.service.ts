import { Injectable } from '@angular/core';

const key = 'Estabelecimentos'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getLocalEstablishments(): Object {
    const values = localStorage.getItem(key);
    return values == null ? null : JSON.parse(values);
  }

  setLocalEstablishments(obj: Object) {
    return localStorage.setItem(key, JSON.stringify(obj));
  }

}
