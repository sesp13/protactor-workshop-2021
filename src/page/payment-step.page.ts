import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private payByCheckButton: ElementFinder;

  constructor() {
    this.payByCheckButton = $('#HOOK_PAYMENT .bankwire');
  }

  public async payByCheck(): Promise<void> {
    await this.payByCheckButton.click();
  }
}
