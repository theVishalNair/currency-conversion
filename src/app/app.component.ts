import { State } from './models/index';
import { Currency } from './models/currency';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmountChangeAction } from './actions/amount';

import * as fromRoot from './reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public amount$: Observable<number>;
  public currencyRates$: Observable<Currency[]>;


  constructor(public store: Store<State>) {
    this.amount$ = store.select(fromRoot.getAmountState);
    this.currencyRates$ = store.select(fromRoot.getCurrnecyRates);
  }

  onAmountChange(amount: string) {
    const number = parseFloat(amount);
    if (!isNaN(number)) {
      this.store.dispatch(new AmountChangeAction(number));
    }
  }
}
