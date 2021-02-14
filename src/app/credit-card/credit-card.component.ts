import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import { CreditCard } from 'src/app/shared/interface/credit-card';
import { CreditCardService } from '../shared/services/credit-card.service';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})

export class CreditCardComponent implements OnInit {

  creditCardForm: FormGroup;
  creditCard: CreditCard | undefined;

  constructor(private formBuilder: FormBuilder, private creditCardService: CreditCardService) {

   }

  ngOnInit(): void {
    this.creditCardForm = this.formBuilder.group({
      creditCardNumber: ['', Validators.required],
      cardHolder: ['', Validators.required],
      expirationDate: ['', Validators.required],
      securityCode: ['', Validators.required],
      amount: ['', Validators.required]
  })
  }

  onSubmit() {
    this.creditCard = {
      creditCardNumber: this.creditCardForm?.get('creditCardNumber')?.value,
      cardHolder: this.creditCardForm?.get('cardHolder')?.value,
      expirationDate: this.creditCardForm?.get('expirationDate')?.value,
      securityCode: this.creditCardForm?.get('securityCode')?.value,
      amount: this.creditCardForm?.get('amount')?.value,
    }
    //console.log(this.creditCard);
    this.creditCardService.postCreditCard(this.creditCard).subscribe(res => {
      
    })
  }


}
