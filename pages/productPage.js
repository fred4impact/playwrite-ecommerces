class ProductPage {
    constructor(page) {
      this.page = page;
      this.firstProduct = "(//div[@class='product-thumb']//a[contains(@href, 'product')])[1]";
      this.addToCartButton = "#button-cart";
      this.cartIcon = "#cart";
    }
  
    async selectFirstProduct() {
      await this.page.click(this.firstProduct);
    }
  
    async addToCart() {
      await this.page.click(this.addToCartButton);
    }
  
    async goToCart() {
      await this.page.click(this.cartIcon);
    }
  }
  
  export default ProductPage;
  