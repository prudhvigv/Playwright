import { expect } from '@playwright/test';
import { LoginPage } from '../src/pages/Login/loginPage';
import { test } from '../src/hooks/hooks';
import { EnvConfig } from '../src/config/EnvConfig';

test.describe('Login Page', () => {
  test('should display the login form', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();
  });

  test('should allow user to enter credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.enterUsername(EnvConfig.admin_username);
    await loginPage.enterPassword(EnvConfig.admin_password);
    await expect(loginPage.usernameInput).toHaveValue('prudhvi-admin');
    await expect(loginPage.passwordInput).toHaveValue('Quality@123');
  });

  test('should submit the form and redirect on successful login', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('prudhvi-admin', 'Quality@123');
    await expect(page).toHaveURL(/\/assignments/);
    await loginPage.LOGOUT();
  });
});
