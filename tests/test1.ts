import { Selector } from 'testcafe';
import AuthPage from '../pages/auth.page';
import { standardUser, lockedUser } from '../data/users'

fixture `Authentication`
    .page('https://www.saucedemo.com/');

test('Login with standard user', async t => {
    await AuthPage.Login(standardUser);
});

test('Login with locked out user', async t => {
    await AuthPage.Login(lockedUser);
    await t.expect(AuthPage.Elements.ErrorBlock.innerText)
        .eql('Epic sadface: Sorry, this user has been locked out.');
});