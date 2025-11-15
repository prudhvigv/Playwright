<<<<<<<< HEAD:archieve/IAM/Users/CreateUser.spec.ts
import { test } from '../../../src/hooks/hooks';
import { LoginPage } from '../../../src/pages/Login/loginPage';
import { IAM_CreateNewUsers } from '../../../src/pages/IAM/USERS/IAM_CreateNewUsers';
import { EnvConfig } from '../../../src/config/EnvConfig';
========
import { test } from '../../src/hooks/hooks';
import { LoginPage } from '../../src/pages/Login/loginPage';
import { IAM_CreateNewUsers } from '../../src/pages/IAM/USERS/IAM_CreateNewUsers';
import { EnvConfig } from '../../src/config/EnvConfig';
>>>>>>>> 393ef580a6186403202104599396b6ed228500c7:archieve/Users/CreateUser.spec.ts

test.describe('Validate user creation scenarios', () => {
  test('user should be displayed with Save button as disabled when no data is entered', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const createUserPage = new IAM_CreateNewUsers(page);
    await loginPage.LOGIN_WITH_VALID_CREDENTIALS(
      EnvConfig.admin_username,
      EnvConfig.admin_password,
    );
    await createUserPage.IAM_USER_PAGE.navigateToCreateUserPage();
    await createUserPage.validateSaveBtnDisabled();
  });

  test('user should be able to see mandatory error when no data is entered', async ({
    page,
  }) => {
    const loginPage = new LoginPage(page);
    const createUserPage = new IAM_CreateNewUsers(page);
    await loginPage.LOGIN_WITH_VALID_CREDENTIALS(
      'prudhvi-admin',
      'Quality@123',
    );
    await createUserPage.VALIDATE_ERROR_ON_MANDATORY_FIELDS();
  });

  test.only('User should be able to create a valid user', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const createUserPage = new IAM_CreateNewUsers(page);
    await loginPage.LOGIN_WITH_VALID_CREDENTIALS(
      'prudhvi-admin',
      'Quality@123',
    );
    await createUserPage.CREATE_VALID_USER();
  });
});
