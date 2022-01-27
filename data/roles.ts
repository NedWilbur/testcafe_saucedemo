import { Role } from 'testcafe';
import AuthPage from '../pages/auth.page';

export interface IUser {
    userName: string;
    password: string;
}

export const standardUser: IUser = { userName: 'standard_user', password: 'secret_sauce'};
export const lockedUser: IUser = { userName: 'locked_out_user', password: 'secret_sauce'};

export const standardUserRole = Role(
    'https://www.saucedemo.com/',
    async () => {
      await AuthPage.Login(standardUser)
    },
    { preserveUrl: true }
);