import { Selector } from 'testcafe';
import Page from '../pages/_pages'
import { standardUserRole } from '../data/roles'
import { Item } from '../common/item';

fixture `Cart`
    .page('https://www.saucedemo.com/inventory.html')
    .beforeEach(async t => {
        await t.useRole(standardUserRole);
    });

test('Sandbox', async t => {
    // const itemByIndex: Selector = Page.Inventory.El.ItemAddRemoveButtonByIndex(2);
    // const itemByName: Selector = Page.Inventory.El.ItemAddRemoveButtonByName('Sauce Labs Backpack');

    const item: Item = await Page.Inventory.GetItemDetails();

    await t
        .click(Page.Inventory.El.ItemAddRemoveButton)
        .expect(Page.Inventory.El.ItemAddRemoveButton.innerText).eql('REMOVE')
        .expect(Page.Navbar.El.ShoppingCartBadge.innerText).eql('1')
        .click(Page.Navbar.El.ShoppingCartButton);

    await Page.Cart.ItemExist(item);
});

test('Purchase single item added from inventory page', async t => {
    
});