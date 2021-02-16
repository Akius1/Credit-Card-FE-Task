export interface ICreditCard{
  creditCardNumber: string;
  cardHolder: string;
  expirationDate: Date;
  securityCode: string;
  amount: number;
}


export class CreditCard{
  private _creditCardNumber: string;
  private _cardHolder: string;
  private _expirationDate : Date;
  private _securityCode : string;
  private _amount : number;


  constructor( ) {

  }



  public get creditCardNumber() : string {
    return this._creditCardNumber;
  }
  public set creditCardNumber(v : string) {
    this._creditCardNumber = v;
  }


  public get cardHolder() : string {
    return this._cardHolder;
  }
  public set cardHolder(v : string) {
    this._cardHolder = v;
  }


  public get expirationDate() : Date {
    return this._expirationDate;
  }
  public set expirationDate(v : Date) {
    this._expirationDate = v;
  }


  public get securityCode() : string {
    return this._securityCode;
  }
  public set securityCode(v : string) {
    this._securityCode = v;
  }


  public get amount() : number {
    return this._amount;
  }
  public set amount(v : number) {
    this._amount = v;
  }

}
