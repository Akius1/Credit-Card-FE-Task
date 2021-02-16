import { createAction, props } from '@ngrx/store';
import { ICreditCard,CreditCard } from '../shared/credit-card';



export enum CreditCardActionType {
  LOAD_CREDIT_CARD = '[CreditCardPayment] Load',
  LOAD_CREDIT_CARD_SUCCESS = '[CreditCardPayment] Load Success',
  REFRESH = '[CreditCardPayment] Refresh',
  PAY_WITH_CARD = '[CreditCardPayment] Pay',
  PAY_WITH_CARD_SUCCESS = '[CreditCardPayment] Payment Success',
  PAY_WITH_CARD_ERROR = '[CreditCardPayment] Submit Success'
}

export const load = createAction(CreditCardActionType.LOAD_CREDIT_CARD);

export const loadSuccess = createAction(
  CreditCardActionType.LOAD_CREDIT_CARD_SUCCESS,
  props<{ creditCardData: ICreditCard }>()
);

export const payWithCard = createAction(
  CreditCardActionType.PAY_WITH_CARD,
  props<{ paymentData: ICreditCard }>()
);

export const payWithCardSuccess = createAction(
  CreditCardActionType.PAY_WITH_CARD_SUCCESS,
  props<{ creditCardData: ICreditCard }>()
);

export const payWithCardError = createAction(
  CreditCardActionType.PAY_WITH_CARD_SUCCESS,
  props<{ error: string }>()
);


export const refresh = createAction(CreditCardActionType.REFRESH);
