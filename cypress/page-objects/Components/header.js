class Header {
    getCartIcon() {
        return cy.get('a.cart-icon');
    }

    openCart() {
        this.getCartIcon().click();
    }

    getCategory(categoryName) {
        return cy.get(`nav .category`).contains(categoryName);
    }

    getSubCategory(categoryName, subCategoryName) {
        return this.getCategory(categoryName).parent().find(`.subcategory`).contains(subCategoryName);
    }

    selectCategory(categoryName) {
        this.getCategory(categoryName).click();
    }

    selectSubCategory(categoryName, subCategoryName) {
        this.getSubCategory(categoryName, subCategoryName).click();
    }
}

export default Header;
