class HomePage {
    constructor(page) {
      this.page = page;
      this.searchBar = "input[name='search']";
      this.searchButton = "//button[@type='submit']";
    }
  
    async searchProduct(productName) {
      await this.page.click(this.searchBar, productName);
      await this.page.click(this.searchButton);
    }
  }
  
  export default HomePage;
  