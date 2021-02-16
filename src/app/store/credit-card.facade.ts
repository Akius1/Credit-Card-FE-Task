import { Injectable } from '@angular/core';
import { select, State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICreditCard, CreditCard } from '../shared/credit-card';
import { load, payWithCard, payWithCardSuccess } from './credit-card.action'
import { CreditCardQuery } from './credit-card.selectors';

@Injectable({providedIn:'root'})
export class CreditCardPaymentFacade {
  readonly data$: Observable<any>;

  constructor(private store: Store) {
    this.data$ = this.store.pipe(select(CreditCardQuery.getICreditCard));
  }

  getCreditCardData() {
    this.store.dispatch(load());
  }

  makePayment(paymentData: ICreditCard) {
    this.store.dispatch(payWithCard({paymentData}))
  }

  storeCard(creditCardData: { creditCardData:ICreditCard; }) {
    this.store.dispatch(payWithCardSuccess(creditCardData))
  }
}
