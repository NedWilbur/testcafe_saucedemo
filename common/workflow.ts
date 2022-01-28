import { t } from 'testcafe';
import Page from '../pages/_pages'
import Person from "../data/person";
import Item from "./item";

export default new class Workflows {
    public async Checkout(item: Item, person: Person) {
        // TODO: Accept a list of items to validate all exist

        await t.click(Page.Navbar.El.ShoppingCartButton);
        await Page.Cart.ItemExist(item);
        await t.click(Page.Cart.El.CheckoutButton)
        await Page.Checkout.EnterInfo(person);
        await Page.Checkout.ItemExist(item);
        await t.click(Page.Checkout.El.FinishButton)
            .expect(Page.Checkout.El.CompleteHeader.innerText).eql('THANK YOU FOR YOUR ORDER')
            .expect(Page.Checkout.El.CompleteDescription.innerText).eql('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    }
}