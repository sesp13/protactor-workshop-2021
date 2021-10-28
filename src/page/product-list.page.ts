import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  public getAddToCartButton(): ElementFinder {
    return this.addToCartButton;
  }

  constructor() {
    this.addToCartButton = $(
      '#center_column a.ajax_add_to_cart_button',
    );
  }

  public async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }
}
