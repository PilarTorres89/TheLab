class SearchBar {
    getSearchBox() {
        return cy.get('input[name="search"]');
    }

    searchForProduct(product) {
        this.getSearchBox().type(`${product}{enter}`);
    }
}

export default SearchBar;