class OrderConfirmationPage {
    constructor(page) {
      this.page = page;
      this.orderSuccessMessage = "//h1[contains(text(), 'Your order has been placed!')]";
    }
  
    async verifyOrderSuccess() {
      await this.page.waitForSelector(this.orderSuccessMessage);
      return this.page.locator(this.orderSuccessMessage).textContent();
    }
  }
  
  export default OrderConfirmationPage;
  