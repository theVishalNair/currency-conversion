import { State } from './../models/index';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';

export const reducers = {
    amount: fromAmount.reducer,
    currencies: fromCurrency.reducer
};


export const getAmountState = (state: State) => state.amount;

export const getCurrnecyRates = (state: State) => state.currencies;
