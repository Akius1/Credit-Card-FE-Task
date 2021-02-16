import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ToasterConfig } from 'angular2-toaster';
import {ICreditCard} from '../app/shared/credit-card'
import { CreditCardPaymentFacade } from './store/credit-card.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FrontEnd-Task';
  toasterConfig: ToasterConfig;
  creditCard$: Observable<ICreditCard>;
  constructor(private router: Router, private creditCardPaymentFacade: CreditCardPaymentFacade) {
    this.toasterConfig = new ToasterConfig({
      showCloseButton: true,
      tapToDismiss: true,
      positionClass: 'toast-top-full-width',
      timeout: 3000
    });
    this.creditCard$ = this.creditCardPaymentFacade.data$;
  }

  ngOnInit() {
    this.creditCard$.subscribe(data => {
    })
  }

    directToCreditCard() {
      this.router.navigate(['credit-card'])
    }
}
