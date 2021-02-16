
import { Action, createReducer, on } from '@ngrx/store';
import { ICreditCard } from '../shared/credit-card';
import * as creditCardPaymentActions from './credit-card.action';


export const featureKey = 'creditCard';
export const currentDate = new Date();

export const initialICreditCard: ICreditCard = {
  creditCardNumber: '',
  cardHolder: '',
  expirationDate: currentDate,
  securityCode: '',
  amount: 0,
}

export interface PaymentState {
  isLoading?: boolean;
  error?: any;
  creditCardData?: ICreditCard;
}

export const initialState: PaymentState = {
  isLoading: false,
  error: null,
  creditCardData: initialICreditCard
};


const featureReducer = createReducer(
  initialState,
  on(creditCardPaymentActions.load, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(creditCardPaymentActions.loadSuccess, (state, { creditCardData }) => {
    return  {
      ...state,
      creditCardData,
      isLoading: false,
      error: null
    };
  }),
  on(creditCardPaymentActions.payWithCardSuccess, (state, { creditCardData }) => ({
    ...state,
    creditCardData,
    isLoading: false,
    error: null
  }))
);

export function reducer(state: PaymentState, action: Action) {
  return featureReducer(state, action);
}
