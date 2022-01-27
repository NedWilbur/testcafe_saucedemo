import { Selector, t } from 'testcafe';
import { IUser } from '../data/roles';

class AuthPage {
    public El = new class {
        UsernameInput: Selector = Selector("*[data-test='username']");
        PasswordInput: Selector = Selector("*[data-test='password']");
        LoginButton: Selector = Selector("*[data-test='login-button']");
        ErrorBlock: Selector = Selector("*[data-test='error']");
    }

    public async Login(user: IUser) {
        await t
            .typeText(this.El.UsernameInput, user.userName)
            .typeText(this.El.PasswordInput, user.password)
            .click(this.El.LoginButton);
    }
}

export default new AuthPage();