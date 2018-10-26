import { Currency } from './../models/currency';
export interface State {
    amount: number;
    currencies: Currency[];
}