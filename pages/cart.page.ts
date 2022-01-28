import { Selector, t } from 'testcafe';
import Item from '../common/item';

class CartPage {
    public El = new class {
        ItemName: Selector = Selector('.inventory_item_name');
        ItemDescription: Selector = Selector('.inventory_item_desc');
        ItemPrice: Selector = Selector('.inventory_item_price');
        ItemRemoveButton: Selector = Selector('button').withText('REMOVE');

        CheckoutButton: Selector = Selector('*[data-test="checkout"]')
    }

    public async ItemExist(item: Item) {
        await t
            .expect(this.El.ItemName.innerText).eql(item.name)
            .expect(this.El.ItemDescription.innerText).eql(item.description)
            .expect(this.El.ItemPrice.innerText).eql(item.price)
    }
}

export default new CartPage();