class LoginPage {
    constructor(page) {
      this.page = page;
      // this.myAccountDropdown = "//span[text()='My account']";
      this.myAccountDropdown = "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
      
      this.loginLink = "text=Login";
      this.emailInput = "//input[@id='input-email']";
      this.passwordInput = "//input[@id='input-password']";
      this.loginButton = "input[type='submit']";
    }
  
    async navigate() {
      await this.page.goto('/');
    }
  
    async login(email, password) {
      await this.page.hover(this.myAccountDropdown);
      await this.page.click(this.loginLink);
      await this.page.fill(this.emailInput, email);
      await this.page.fill(this.passwordInput, password);
      await this.page.click(this.loginButton);
    }
  }
  
  export default LoginPage;
  