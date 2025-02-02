class CartPage {
    constructor(page) {
      this.page = page;
      this.checkoutButton = "a[href*='checkout']";
    }
  
    async proceedToCheckout() {
      await this.page.click(this.checkoutButton);
    }
  }
  
  export default CartPage;
  