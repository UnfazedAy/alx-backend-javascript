/* eslint-disable no-underscore-dangle */
export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    this.amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    this.currency = val;
  }

  displayFullPrice() {
    return (`${this.amount} ${this.currency.name} (${this.currency.code})`);
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
