import { Selector, t } from 'testcafe';

class InventoryPage {
    public Elements = new class {
        Header: Selector = Selector(".title");
        ItemContainer: Selector = Selector(".inventory_item");
        ItemTitle: Selector = Selector(".inventory_item_name");
        ItemDescription: Selector = Selector(".inventory_item_desc");
        ItemPrice: Selector = Selector(".inventory_item_price");
        ItemBuyButton: Selector = Selector("button").withText('Add to cart');
    }

    // public async AddItemToCart(user: IUser) {
    //     await t
    //         .typeText(this.Elements.UsernameInput, user.userName)
    //         .typeText(this.Elements.PasswordInput, user.password)
    //         .click(this.Elements.LoginButton);
    // }
}

export default new InventoryPage();