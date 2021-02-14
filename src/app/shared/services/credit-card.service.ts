import { Injectable } from '@angular/core';
import { CreditCard } from '../interface/credit-card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  BASE_URL = '';

  constructor(private http: HttpClient) {}

  postCreditCard(creditCardDetails: CreditCard) {
    return this.http.post(this.BASE_URL, creditCardDetails);
  }

  validateWithLuhn = (digits: any) => {
    let idx = digits.length - 2;
    while (idx >= 0) {
      const x = digits[idx] * 2;
      digits[idx] = x > 9 ? x - 9 : x;
      idx -= 2;
    }

    const sum = digits.reduce((total: any, value: any) => total + value, 0);
    return sum % 10 === 0;
  };

  validateCardNumber = (c: FormControl) => {
    if (c.value) {
      console.log(c.value);
      let value = [c.value];
      const validity = this.validateWithLuhn(value);
      return validity
        ? null
        : {
            validateCardNumber: {
              valid: false,
            },
          };
    }
    return null;
  };
  expiryDateFormatIsValid = (c: FormControl) => {
    console.log(c.value);
    let regEx = /^(((0|)[0-9])|((1)[0-2]))(\/)\d{2}$/;
    if (regEx.test(c.value) === true) {
      return regEx.test(c.value) === true
        ? null
        : {
            expiryDateFormatIsValid: {
              valid: false,
            },
          };
    }
    return null;
  };
}
