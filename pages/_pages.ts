import inventoryPage from './inventory.page'
import navbarPage from './navbar.page';
import authPage from './auth.page';
import cartPage from './cart.page';
import checkoutPage from './checkout.page';
import itemPage from './item.page';

// Store all POMs, easier import management (only need `import Page from '../pages/pages'`)
class Pages {
    Auth = authPage;
    Navbar = navbarPage;
    Inventory = inventoryPage;
    Item = itemPage;
    Cart = cartPage;
    Checkout = checkoutPage;
}

export default new Pages();