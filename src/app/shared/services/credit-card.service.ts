import { Injectable } from '@angular/core';
import { CreditCard } from '../interface/credit-card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  BASE_URL = "";

  constructor(private http: HttpClient) { }

  postCreditCard(creditCardDetails: CreditCard) {
    return this.http.post(this.BASE_URL, creditCardDetails);
  }

}
