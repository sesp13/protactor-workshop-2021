import { $, ElementFinder } from 'protractor';

export class ProductListPage {
  private addToCartButton: ElementFinder;

  public getAddToCartButton(): ElementFinder {
    return this.addToCartButton;
  }

  constructor() {
    this.addToCartButton = $(
      '#center_column a.button.ajax_add_to_cart_button.btn.btn-default',
    );
  }

  public async addToCart(): Promise<void> {
    await this.addToCartButton.click();
  }
}
