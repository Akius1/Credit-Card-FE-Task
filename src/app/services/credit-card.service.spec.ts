import { TestBed } from '@angular/core/testing';

import { PaymentService } from './credit-card.service';

describe('CreditCardService', () => {
  let service: PaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
