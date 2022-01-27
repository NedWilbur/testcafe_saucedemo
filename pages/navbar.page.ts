import { Selector, t } from 'testcafe';

class InventoryPage {
    public El = new class {
        ShoppingCartButton: Selector = Selector('.shopping_cart_link')
        ShoppingCartBadge: Selector = Selector('.shopping_cart_badge')
    }
}

export default new InventoryPage();