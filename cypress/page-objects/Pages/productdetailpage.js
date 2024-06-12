import BasePage from '../BasePage';

class ProductDetailPage extends BasePage {
    getColorOptions() {
        return cy.get('.color-options');
    }

    getSizeOptions() {
        return cy.get('.size-options');
    }

    getAddToCartButton() {
        return cy.get('button.add-to-cart');
    }

    selectColor(color) {
        this.getColorOptions().contains(color).click();
    }

    selectSize(size) {
        this.getSizeOptions().contains(size).click();
    }

    addToCart() {
        this.getAddToCartButton().click();
    }
}

export default ProductDetailPage;