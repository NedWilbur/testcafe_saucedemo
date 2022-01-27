import { Selector } from 'testcafe';
import { standardUserRole } from '../data/roles'

fixture `Cart`
    .page('https://www.saucedemo.com/inventory.html')
    .beforeEach(async t => {
        await t.useRole(standardUserRole);
    });

test('Add product to cart from inventory page', async t => {

});