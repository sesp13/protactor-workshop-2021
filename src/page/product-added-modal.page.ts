import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private checkOutButton: ElementFinder;

  public getCheckoutButton(): ElementFinder {
    return this.checkOutButton;
  }

  constructor() {
    this.checkOutButton = $('#layer_cart .button-container > a');
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.checkOutButton.click();
  }
}
