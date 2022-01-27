import { Selector } from 'testcafe';
import Page from '../pages/_pages'
import { standardUserRole } from '../data/roles'

fixture `Cart`
    .page('https://www.saucedemo.com/inventory.html')
    .beforeEach(async t => {
        await t.useRole(standardUserRole);
    });

test('Add product to cart from inventory page', async t => {
    await t
        .click(Page.Inventory.El.ItemAddRemoveButton)
        .expect(Page.Inventory.El.ItemAddRemoveButton.innerText).eql('REMOVE')
        .expect(Page.Navbar.El.ShoppingCartBadge.innerText).eql('1');
});