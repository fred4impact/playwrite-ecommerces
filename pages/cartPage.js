class CartPage {
    constructor(page) {
      this.page = page;
      //this.checkoutButton = "a[href*='checkout']";
      this.checkoutBtn ="//a[contains(., 'Checkout')]"
    }
  
    async proceedToCheckout() {
      await this.page.locator(this.checkoutBtn);
    }
  }
  
  export default CartPage;
  