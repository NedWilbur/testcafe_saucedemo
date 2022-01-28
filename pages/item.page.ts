import { Selector, t } from 'testcafe';
import Item from '../common/item';

class ItemPage {
    public El = new class {
        ItemName: Selector = Selector('.inventory_details_name');
        ItemDescription: Selector = Selector('.inventory_details_desc');
        ItemPrice: Selector = Selector('.inventory_details_price');
        ItemAddRemoveButton: Selector = Selector('.btn_inventory');
    }

    public async GetItemDetails(): Promise<Item> {
        return await new Item(
            await this.El.ItemName.innerText,
            await this.El.ItemDescription.innerText,
            await this.El.ItemPrice.innerText
        )
    }

    public async ExpectItemDetails(item: Item) {
        await t
            .expect(this.El.ItemName.innerText).eql(item.name)
            .expect(this.El.ItemDescription.innerText).eql(item.description)
            .expect(this.El.ItemPrice.innerText).eql(item.price)
    }
}

export default new ItemPage();