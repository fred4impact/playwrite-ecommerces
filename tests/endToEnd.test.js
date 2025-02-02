import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import HomePage from '../pages/homePage.js';
import ProductPage from '../pages/productPage.js';
import CartPage from '../pages/cartPage.js';
import CheckoutPage from '../pages/checkoutPage.js';
import OrderConfirmationPage from '../pages/orderConfirmationPage.js';

test.describe('E-commerce Playground E2E Test', () => {
  test('Complete Purchase Flow', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);

    // Step 1: Login
    await loginPage.navigate();
    await loginPage.login('testuser@example.com', 'password123');

    // Step 2: Search & Select Product
    await homePage.searchProduct('MacBook');
    await productPage.selectFirstProduct();
    await productPage.addToCart();
    await productPage.goToCart();

    // Step 3: Proceed to Checkout
    await cartPage.proceedToCheckout();
    await checkoutPage.completeCheckout();

    // Step 4: Verify Order Confirmation
    const orderMessage = await orderConfirmationPage.verifyOrderSuccess();
    expect(orderMessage).toContain('Your order has been placed');
  });
});
