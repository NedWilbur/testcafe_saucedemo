import inventoryPage from './inventory.page'
import navbarPage from './navbar.page';
import authPage from './auth.page';

// Store all POMs, easier import management (`import Page from '../pages/pages'`)
class Pages {
    Auth = authPage;
    Navbar = navbarPage;
    Inventory = inventoryPage;
}

export default new Pages();