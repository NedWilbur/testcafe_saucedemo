import { Selector, t } from 'testcafe';
import Item from '../common/item';
import Person from '../data/person';
import Page from '../pages/_pages'

class CheckoutPage {
    public El = new class {
        FirstName: Selector = Selector('*[data-test="firstName"]');
        LastName: Selector = Selector('*[data-test="lastName"]');
        ZipCode: Selector = Selector('*[data-test="postalCode"]');
        ContinueButton: Selector = Selector('*[data-test="continue"]');
        FinishButton: Selector = Selector('*[data-test="finish"]');
        CompleteHeader: Selector = Selector('.complete-header');
        CompleteDescription: Selector = Selector('.complete-text');
    }

    public async EnterInfo(person: Person, clickContinue: Boolean = true) {
        await t
            .typeText(this.El.FirstName, person.FirstName)
            .typeText(this.El.LastName, person.LastName)
            .typeText(this.El.ZipCode, person.ZipCode.toString());

        if (clickContinue) await t.click(this.El.ContinueButton);
    }

    public async ItemExist(item: Item) {
        // same locators, can just call pre-existing method from cart
        await Page.Cart.ItemExist(item);
    }
}

export default new CheckoutPage();