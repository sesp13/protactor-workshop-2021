import { $, ElementFinder } from 'protractor';

export class OrderSummaryStepPage {
  private confirmationMessage: ElementFinder;

  constructor() {
    this.confirmationMessage = $('.cheque-indent .dark');
  }

  public async getConfirmationMessage(): Promise<string> {
    return this.confirmationMessage.getText();
  }
}
