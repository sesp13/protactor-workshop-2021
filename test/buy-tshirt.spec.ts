import { browser } from 'protractor';
import {
  MenuContentPage,
  ProductListPage,
  ProductAddedModalPage,
  SummaryStepPage,
  SignInStepPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
  BankPaymentStepPage,
  OrderSummaryStepPage,
} from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const productListPage: ProductListPage = new ProductListPage();
  const productAddedModalPage: ProductAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage: SummaryStepPage = new SummaryStepPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const paymentStepPage: PaymentStepPage = new PaymentStepPage();
  const bankPaymentStepPage: BankPaymentStepPage = new BankPaymentStepPage();
  const orderSummaryStepPage: OrderSummaryStepPage = new OrderSummaryStepPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await browser.sleep(3000);
    await menuContentPage.goToTShirtMenu();
    await browser.sleep(3000);
    await productListPage.addToCart();
    await browser.sleep(3000);
    await productAddedModalPage.proceedToCheckOut();
    await browser.sleep(3000);
    await summaryStepPage.proceedToCheckOut();
    await browser.sleep(3000);
    await signInStepPage.fillForm('aperdomobo@gmail.com', 'WorkshopProtractor');
    await signInStepPage.signIn();
    await browser.sleep(3000);
    await addressStepPage.proceedToCheckOut();
    await browser.sleep(3000);
    await shippingStepPage.checkTermsButton();
    await browser.sleep(3000);
    await shippingStepPage.proceedToCheckOut();
    await browser.sleep(3000);
    await paymentStepPage.payByCheck();
    await browser.sleep(3000);
    await bankPaymentStepPage.confirmPayment();
    await browser.sleep(3000);

    await expect(orderSummaryStepPage.getConfirmationMessage()).toBe(
      'Your order on My Store is complete.',
    );
  });
});
