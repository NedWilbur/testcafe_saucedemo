import { Selector, t } from 'testcafe';

class InventoryPage {
    public El = new class {
        ShoppingCartButton: Selector = Selector('.shopping_cart_link')
        ShoppingCartBadge: Selector = Selector('.shopping_cart_badge')
    }

    public async NavToCart() {
        await t.click(this.El.ShoppingCartButton);
    }
}

export default new InventoryPage();