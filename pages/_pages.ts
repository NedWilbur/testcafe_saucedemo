import inventoryPage from './inventory.page'
import navbarPage from './navbar.page';
import authPage from './auth.page';
import cartPage from './cart.page';

// Store all POMs, easier import management (only need `import Page from '../pages/pages'`)
class Pages {
    Auth = authPage;
    Navbar = navbarPage;
    Inventory = inventoryPage;
    Cart = cartPage;
}

export default new Pages();