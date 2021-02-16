
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { moduleFeatureKey } from ".";


import { featureKey, PaymentState } from "./credit-card.reducer";

export const selectICreditCard = (state: any): PaymentState => state[moduleFeatureKey][featureKey];
const getPaymentState = createSelector(selectICreditCard, state => state);
const getICreditCard = createSelector(selectICreditCard, state => state.creditCardData);

export const CreditCardQuery = {
  selectICreditCard,
  getICreditCard,
  getPaymentState
};
