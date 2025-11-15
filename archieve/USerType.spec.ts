import { LoginPage } from '../src/pages/Login/loginPage';
import { HomePage } from '../src/pages/HomePage/HomePage';
import { test } from '../src/hooks/hooks';
import { EnvConfig } from '../src/config/EnvConfig';

test.describe('User Type Tests', () => {
  test('Validate if Admin user is displayed with settings icon', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.login(EnvConfig.admin_username, EnvConfig.admin_password);
    await homePage.validateSettingsIconVisible(true);
  });

  test('Validate if Non-Admin user is displayed without settings icon', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    await loginPage.login('prudhvi.golla@mavQ.com', 'Quality@123');
    await homePage.validateSettingsIconVisible(false);
  });
});
