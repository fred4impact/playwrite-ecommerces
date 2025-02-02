class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.billingAddressContinue = "#button-payment-address";
      this.shippingAddressContinue = "#button-shipping-address";
      this.shippingMethodContinue = "#button-shipping-method";
      this.paymentMethodContinue = "#button-payment-method";
      this.termsCheckbox = "input[name='agree']";
      this.confirmOrderButton = "#button-confirm";
    }
  
    async completeCheckout() {
      await this.page.click(this.billingAddressContinue);
      await this.page.click(this.shippingAddressContinue);
      await this.page.click(this.shippingMethodContinue);
      await this.page.click(this.paymentMethodContinue);
      await this.page.check(this.termsCheckbox);
      await this.page.click(this.confirmOrderButton);
    }
  }
  
  export default CheckoutPage;
  