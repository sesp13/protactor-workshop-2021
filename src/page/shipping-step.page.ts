import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private checkOutButton: ElementFinder;

  private termsButton: ElementFinder;

  constructor() {
    this.checkOutButton = $('.cart_navigation button');
    this.termsButton = $('#cgv');
  }

  public async checkTermsButton(): Promise<void> {
    await this.termsButton.click();
  }

  public async proceedToCheckOut(): Promise<void> {
    await this.checkOutButton.click();
  }
}
