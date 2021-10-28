import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private checkOutButton: ElementFinder;

  constructor() {
    this.checkOutButton = $('.cart_navigation button');
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.checkOutButton.click();
  }
}
