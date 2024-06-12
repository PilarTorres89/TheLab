import BasePage from '../BasePage';
import SearchBar from '../Components/searchbar';

class HomePage extends BasePage {
    constructor() {
        super();
        this.searchBar = new SearchBar();
    }

    visit() {
        super.visit('/');
    }
}

export default HomePage;