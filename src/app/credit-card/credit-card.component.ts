import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { CreditCard } from 'src/app/shared/interface/credit-card';
import { CreditCardService } from '../shared/services/credit-card.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})

export class CreditCardComponent implements OnInit {

  creditCardForm: FormGroup;
  creditCard = new CreditCard();

  constructor(private formBuilder: FormBuilder, private creditCardService: CreditCardService) {

   }

  ngOnInit(): void {
    this.creditCardForm = this.formBuilder.group({
      creditCardNumber:  new FormControl(this.creditCard.creditCardNumber, Validators.required),
      cardHolder: new FormControl( this.creditCard.cardHolder, Validators.required),
      expirationDate: new FormControl(this.creditCard.expirationDate, Validators.required),
      securityCode: new FormControl(this.creditCard.securityCode, Validators.required),
      amount: new FormControl(this.creditCard.amount, Validators.required)
  })
  }

  onSubmit() {

    this.creditCard.amount = this.creditCardForm?.get('amount')?.value;
    this.creditCard.cardHolder = this.creditCardForm?.get('cardHolder')?.value;
    this.creditCard.expirationDate = this.creditCardForm?.get('expirationDate')?.value;
    this.creditCard.securityCode = this.creditCardForm?.get('securityCode')?.value;
    this.creditCard.creditCardNumber = this.creditCardForm?.get('creditCardNumber')?.value;
    //console.log(this.creditCard);
    this.creditCardService.postCreditCard(this.creditCard).subscribe(res => {

    })
  }

  get form() {
    return this.creditCardForm.controls;
  }


}
