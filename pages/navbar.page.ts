import { Selector, t } from 'testcafe';

class InventoryPage {
    public Elements = new class {
        ShoppingCartButton: Selector = Selector('.shopping_cart_link')
        ShoppingCartBadge: Selector = Selector('.shopping_cart_badge')
    }

    public async NavToCart() {
        await t.click(this.Elements.ShoppingCartButton);
    }
}

export default new InventoryPage();