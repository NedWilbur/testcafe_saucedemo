import { Role } from 'testcafe';
import AuthPage from '../pages/auth.page';
import { standardUser, lockedUser } from '../data/users'

export const standardUser = Role(
    'https://www.saucedemo.com/',
    async () => {
      await AuthPage.Login(standardUser)
    },
    { preserveUrl: true }
);

export const lockedUser = Role(
    'https://www.saucedemo.com/',
    async () => {
      await AuthPage.Login(lockedUser)
    },
    { preserveUrl: true }
);
