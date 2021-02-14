export interface ICreditCard{
  creditCardNumber: number;
  cardHolder: string;
  expirationDate: Date;
  securityCode: number;
  amount: number;
}


export class CreditCard{
  private _creditCardNumber: number;
  private _cardHolder: string;
  private _expirationDate : Date;
  private _securityCode : number;
  private _amount : number;


  constructor( ) {

  }



  public get creditCardNumber() : number {
    return this._creditCardNumber;
  }
  public set creditCardNumber(v : number) {
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


  public get securityCode() : number {
    return this._securityCode;
  }
  public set securityCode(v : number) {
    this._securityCode = v;
  }


  public get amount() : number {
    return this._amount;
  }
  public set amount(v : number) {
    this._amount = v;
  }

}
