import { Selector } from 'testcafe';
import { standardUserRole } from '../data/roles'
import InventoryPage from '../pages/inventory.page'
import navbarPage from '../pages/navbar.page';

fixture `Cart`
    .page('https://www.saucedemo.com/inventory.html')
    .beforeEach(async t => {
        await t.useRole(standardUserRole);
    });

test('Add product to cart from inventory page', async t => {
    await t
        .click(InventoryPage.Elements.ItemAddRemoveButton)
        .expect(InventoryPage.Elements.ItemAddRemoveButton.innerText).eql('REMOVE')
        .expect(navbarPage.Elements.ShoppingCartBadge.innerText).eql('1');
});