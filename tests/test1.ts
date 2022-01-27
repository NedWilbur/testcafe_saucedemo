import { Selector } from 'testcafe';
import AuthPage from '../pages/auth.page';

fixture `Authentication`
    .page `https://www.saucedemo.com/`;

test('Login with standard user', async t => {
    // await t
    //     .typeText(page.nameInput, 'Peter')
    //     .typeText(page.nameInput, 'Paker', { replace: true })
    //     .typeText(page.nameInput, 'r', { caretPos: 2 })
    //     .expect(page.nameInput.value).eql('Parker');

    await AuthPage.Login("standard_user", "secret_sauce");
});

test.skip('Login with locked out user', async t => {
    // for (const feature of page.featureList) {
    //     await t
    //         .click(feature.label)
    //         .expect(feature.checkbox.checked).ok();
    // }
});

test.skip('Login with problem user', async t => {
    // const header = Selector('#article-header');
    // await page.submitName('Peter');
    // await t.expect(header.innerText).eql('Thank you, Peter!');
});