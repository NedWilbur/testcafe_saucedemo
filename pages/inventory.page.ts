import { Selector, t } from 'testcafe';
import { Item } from '../common/item';

class InventoryPage {
    public El = new class {
        Header: Selector = Selector(".title");
        ItemContainer: Selector = Selector(".inventory_item");
        ItemTitle: Selector = Selector(".inventory_item_name");
        ItemDescription: Selector = Selector(".inventory_item_desc");
        ItemPrice: Selector = Selector(".inventory_item_price");
        
        ItemAddRemoveButton: Selector = Selector('.btn_inventory');
        ItemAddRemoveButtonByIndex(index: number): Selector { return this.ItemAddRemoveButton.nth(index); }
        // .parent & .find only accept css path, cannot pass `this.ItemContainer`.
        ItemAddRemoveButtonByName(productName: string): Selector { 
            return this.ItemTitle.withText(productName).parent('.inventory_item').find('.btn_inventory');
        }
    }

    public async GetItemDetails(): Promise<Item> {
        return await new Item(
            await this.El.ItemTitle.innerText,
            await this.El.ItemDescription.innerText,
            await this.El.ItemPrice.innerText
        )
    }
}

export default new InventoryPage();