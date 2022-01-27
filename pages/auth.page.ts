import { Selector, t } from 'testcafe';

class AuthPage {
    public Elements = new class {
        UsernameInput: Selector = Selector("*[data-test='username']");
        PasswordInput: Selector = Selector("*[data-test='password']");
        LoginButton: Selector = Selector("*[data-test='login-button']");
    }

    public async Login(userName: string, password: string) {
        await t
            .typeText(this.Elements.UsernameInput, userName)
            .typeText(this.Elements.PasswordInput, password)
            .click(this.Elements.LoginButton);
    }
}

export default new AuthPage();