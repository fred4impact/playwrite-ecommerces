class CheckoutPage {
    constructor(page) {
      this.page = page;
      this.billingAddressContinue = "#button-payment-address";
      this.shippingAddressContinue = "#button-shipping-address";
      this.shippingMethodContinue = "#button-shipping-method";
      this.paymentMethodContinue = "#button-payment-method";
      this.termsCheckbox = "input[name='agree']";
      this.confirmOrderButton = "#button-confirm";

      // Billing Address Form
      this.firstName = "//input[@name='firstname']";
      this.lastName = "//input[@name='lastname']";
      this.address1 = "//input[@name='address_1']";
      this.city = "//input[@name='city']";
      this.postCode = "//input[@name='postcode']";

      // country is select
      this.country = "";
      this.state = "",
       
        // coupon 
      this.couponInput = "";
      this.applyCoupunButton = "";
    }

    async completeCheckout() {
      await this.page.click(this.billingAddressContinue);
      await this.page.click(this.shippingAddressContinue);
      await this.page.click(this.shippingMethodContinue);
      await this.page.click(this.paymentMethodContinue);
      await this.page.check(this.termsCheckbox);
      await this.page.click(this.confirmOrderButton);
    }
  
  async completeBillingForm() {
    await this.page.firstName.fill("bilarn");
    await this.page.lastName.fill("f");
    await this.page.address1.fill("kent");
    await this.page.city.fill("london");
    await this.page.postCode.fill("MQA 6PO");

  }

  async selectCountryAndState() {
    await this.page.country.fill("");
    await this.page.state.fill("");
  }

// coupon function
  async couponApply() {
    await this.page.couponInput.fill("");
    await this.page.applyCoupunButton.fill("");
  }
  
  }
  
  export default CheckoutPage;
  