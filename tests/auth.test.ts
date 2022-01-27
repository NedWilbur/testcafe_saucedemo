import { Selector } from 'testcafe';
import { standardUser, lockedUser } from '../data/roles'
import Page from '../pages/_pages'

fixture `Authentication`
    .page('https://www.saucedemo.com/');

test('Login with standard user', async t => {
    await Page.Auth.Login(standardUser);
    await t.expect(Page.Inventory.El.Header.innerText)
        .eql('PRODUCTS');
});

test('Login with locked out user', async t => {
    await Page.Auth.Login(lockedUser);
    await t.expect(Page.Auth.El.ErrorBlock.innerText)
        .eql('Epic sadface: Sorry, this user has been locked out.');
});