import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { Subject } from 'rxjs';
import { CreditCard,ICreditCard } from 'src/app/shared/credit-card';
import { PaymentService } from '../services/credit-card.service';
import {CreditCardPaymentFacade } from '../store/credit-card.facade';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})

export class CreditCardComponent implements OnInit {
unsubscribe$ = new Subject();
  errorMessage: string;
  creditCardForm: FormGroup;
  creditCard: ICreditCard;
  currentDate = new Date();
  currentYear = this.currentDate.getFullYear();

  constructor(private formBuilder: FormBuilder, private facade: CreditCardPaymentFacade) {

   }

  ngOnInit(): void {

    this.errorMessage = "Please Fill all fields";
    this.creditCardForm = this.formBuilder.group({
      creditCardNumber:  ['', [Validators.required, Validators.minLength(16),Validators.min(1111111111111111),Validators.max(9999999999999999)]],
      cardHolder: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      expirationDate: ['', [Validators.required,]],
      securityCode: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.min(111),Validators.max(999)]],
      amount: ['', [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
  })
  }

  onSubmit() {

    if (this.creditCardForm.status === 'VALID') {
      this.creditCard = {
        amount : this.creditCardForm.get('amount').value,
        cardHolder: this.creditCardForm?.get('cardHolder')?.value,
        expirationDate: this.creditCardForm?.get('expirationDate')?.value,
        securityCode: this.creditCardForm?.get('securityCode')?.value,
        creditCardNumber: this.creditCardForm?.get('creditCardNumber')?.value
      }

      this.facade.makePayment(this.creditCard)

      console.log(this.creditCard)
    } else {
      this.errorMessage = "the Form is Invalid!";
    }
  }

  get form() {
    return this.creditCardForm.controls;
  }



  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
