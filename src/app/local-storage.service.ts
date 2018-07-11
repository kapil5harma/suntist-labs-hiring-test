import { MatTableDataSource } from '@angular/material';
import { LocalStorageService } from 'ngx-store';
import { Injectable, ChangeDetectorRef } from '@angular/core';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  constructor(private localStorageService: LocalStorageService) {}

  saveData(object) {
    const dataExists = this.localStorageService.get('counter');
    if (dataExists) {
      this.localStorageService.set('counter', dataExists + 1);
      this.localStorageService.set(`name-${dataExists + 1}`, object.name);
      this.localStorageService.set(`age-${dataExists + 1}`, object.age);
      this.localStorageService.set(`sex-${dataExists + 1}`, object.sex);
    } else {
      this.localStorageService.set('counter', 1);
      this.localStorageService.set('name-1', object.name);
      this.localStorageService.set('age-1', object.age);
      this.localStorageService.set('sex-1', object.sex);
    }
  }

  retrieveData() {
    const dataExists = this.localStorageService.get('counter');
    let ELEMENT_DATA = [];
    if (dataExists) {
      for (let _i = 1; _i <= dataExists; _i++) {
        ELEMENT_DATA = [
          ...ELEMENT_DATA,
          {
            name: this.localStorageService.get(`name-${_i}`),
            age: this.localStorageService.get(`age-${_i}`),
            sex: this.localStorageService.get(`sex-${_i}`)
          }
        ];
      }
    }
    return ELEMENT_DATA;
  }
}
