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

test('Purchase purchase single item added from item page', async t => {
    const item: Item = await Page.Inventory.GetItemDetails();

    await t
        .click(Page.Inventory.El.ItemName)
        .click(Page.Item.El.ItemAddRemoveButton)
        .expect(Page.Item.El.ItemAddRemoveButton.innerText).eql('REMOVE')
        .expect(Page.Navbar.El.ShoppingCartBadge.innerText).eql('1');
    await Workflow.Checkout(item, person);
});

test('Purchase multiple items added from inventory page', async t => {
    const item: Item = await Page.Inventory.GetItemDetails();
    const itemCount: number = 3;

    for (let index = 0; index < itemCount; index++) {
        let itemAddButtonElement = Page.Inventory.El.ItemAddRemoveButtonByIndex(index);

        await t
            .click(itemAddButtonElement)
            .expect(itemAddButtonElement.innerText).eql('REMOVE')
            .expect(Page.Navbar.El.ShoppingCartBadge.innerText).eql((index+1).toString());
    }
    
    await Workflow.Checkout(item, person);
});

test('Purchase multiple items added from item page', async t => {
    const item: Item = await Page.Inventory.GetItemDetails();
    const itemCount: number = 3;

    for (let index = 0; index < itemCount; index++) {
        await t
            .click(Page.Inventory.El.ItemNameByIndex(index))
            .click(Page.Item.El.ItemAddRemoveButton)
            .expect(Page.Item.El.ItemAddRemoveButton.innerText).eql('REMOVE')
            .expect(Page.Navbar.El.ShoppingCartBadge.innerText).eql((index+1).toString())
            .click(Page.Item.El.BackButton);
    }
    
    await Workflow.Checkout(item, person);
});
