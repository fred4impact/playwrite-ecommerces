class ProductPage {
    constructor(page) {
      this.page = page;
      this.firstProduct = "(//div[@class='product-thumb']//a[contains(@href, 'product')])[1]";
      //this.addToCartButton = "#button-cart";
      this.addToCartButton ='text="Add to Cart"';
      
      this.cartIcon = "//div[@class='cart-icon']";
    }
  
    async selectFirstProduct() {
      await this.page.click(this.firstProduct);
    }
  
    async addToCart() {
      await this.page.locator(this.addToCartButton);
    }
  
    async goToCart() {
      await this.page.hover(this.cartIcon);
    }
  }
  
  export default ProductPage;
  