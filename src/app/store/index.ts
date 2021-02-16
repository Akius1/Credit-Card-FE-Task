
import * as fromCreditCardPaymentStoreActions from './credit-card.action';
import * as fromCreditCardPaymentStoreEffects from './credit-card.effects';
import * as fromCreditCardPaymentStoreSelectors from './credit-card.selectors';
import * as fromCreditCardPaymentStoreReducer from './credit-card.reducer';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { InjectionToken } from '@angular/core';
import { PaymentState } from './credit-card.reducer';
export {
    CreditCardPaymentStoreModule
} from './credit-card-payment-store.module';

export {
    fromCreditCardPaymentStoreActions,
    fromCreditCardPaymentStoreEffects,
    fromCreditCardPaymentStoreSelectors,
    fromCreditCardPaymentStoreReducer
};

export const moduleFeatureKey = 'payment';

export interface paymentModuleState {
  [fromCreditCardPaymentStoreReducer.featureKey]: PaymentState;
}

export const initialModuleState: paymentModuleState = {
  [fromCreditCardPaymentStoreReducer.featureKey]: fromCreditCardPaymentStoreReducer.initialState,
};

export interface State {
  [moduleFeatureKey]: paymentModuleState;
}

export const selectFeature = createFeatureSelector<State, paymentModuleState>(moduleFeatureKey);

export const moduleReducers = new InjectionToken<ActionReducerMap<paymentModuleState>>(moduleFeatureKey, {
  factory: () => ({
    [fromCreditCardPaymentStoreReducer.featureKey]: fromCreditCardPaymentStoreReducer.reducer,
  })
});

