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
    await menuContentPage.goToTShirtMenu();
    await productListPage.addToCart();
    await productAddedModalPage.proceedToCheckOut();
    await summaryStepPage.proceedToCheckOut();
    await signInStepPage.fillForm('aperdomobo@gmail.com', 'WorkshopProtractor');
    await signInStepPage.signIn();
    await addressStepPage.proceedToCheckOut();
    await shippingStepPage.checkTermsButton();
    await shippingStepPage.proceedToCheckOut();
    await paymentStepPage.payByCheck();
    await bankPaymentStepPage.confirmPayment();

    await expect(orderSummaryStepPage.getConfirmationMessage()).toBe(
      'Your order on My Store is complete.',
    );
  });
});
