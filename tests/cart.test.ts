import { Selector } from 'testcafe';
import Page from '../pages/_pages'
import { standardUserRole } from '../data/roles'
import Item from '../common/item';
import Person from '../data/person';
import Workflow from '../common/workflow';

const person: Person = new Person("Swag", "User", 12345);

fixture `Cart`
    .page('https://www.saucedemo.com/inventory.html')
    .beforeEach(async t => {
        await t.useRole(standardUserRole);
    });

test('Sandbox', async t => {
    const item: Item = await Page.Inventory.GetItemDetails();
});

test('Purchase single item added from inventory page', async t => {
    const item: Item = await Page.Inventory.GetItemDetails();

    await t
        .click(Page.Inventory.El.ItemAddRemoveButton)
        .expect(Page.Inventory.El.ItemAddRemoveButton.innerText).eql('REMOVE')
        .expect(Page.Navbar.El.ShoppingCartBadge.innerText).eql('1');
    await Workflow.Checkout(item, person);
});