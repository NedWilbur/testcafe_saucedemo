import { Selector, t } from 'testcafe';
import { IUser } from '../data/roles';

class AuthPage {
    public Elements = new class {
        UsernameInput: Selector = Selector("*[data-test='username']");
        PasswordInput: Selector = Selector("*[data-test='password']");
        LoginButton: Selector = Selector("*[data-test='login-button']");
        ErrorBlock: Selector = Selector("*[data-test='error']");
    }

    public async Login(user: IUser) {
        await t
            .typeText(this.Elements.UsernameInput, user.userName)
            .typeText(this.Elements.PasswordInput, user.password)
            .click(this.Elements.LoginButton);
    }
}

export default new AuthPage();