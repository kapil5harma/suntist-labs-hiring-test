import { LocalstorageService } from './../local-storage.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormComponent implements OnInit {
  constructor(private localStorageService: LocalstorageService) {}

  genders: string[] = ['Male', 'Female'];
  data: any;

  name = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z,',-]+(\s)[a-z,',-]+$/i)
  ]);
  age = new FormControl('', [
    Validators.required,
    Validators.min(1),
    Validators.max(99)
  ]);
  radioButton = new FormControl('', Validators.required);

  getErrorMessage(propertyName) {
    if (propertyName === 'name') {
      return this.name.hasError('required')
        ? 'You must enter a value'
        : 'Not a valid name';
    }
    if (propertyName === 'age') {
      const n = this.age.value;
      return this.age.hasError('required')
        ? 'You must enter a value'
        : !isNaN(parseFloat(n)) &&
          isFinite(n) &&
          n > 0 &&
          n <= 100 &&
          n % 1 === 0
          ? 'Enter age (between 1-99)'
          : 'Enter age (between 1-99)';
    }
  }

  onSubmit() {
    if (!this.name.invalid && !this.age.invalid && !this.radioButton.invalid) {
      const dataObject = {
        name: this.name.value,
        age: this.age.value,
        sex: this.radioButton.value
      };
      this.localStorageService.saveData(dataObject);
      this.data = this.localStorageService.retrieveData();
    }
  }

  ngOnInit() {
    this.data = this.localStorageService.retrieveData();
  }
}
