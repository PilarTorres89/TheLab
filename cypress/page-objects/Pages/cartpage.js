import BasePage from '../BasePage';
import Header from '../Components/header';

class CartPage extends BasePage {
    constructor() {
        super();
        this.header = new Header();
    }

    // Funcionalidades específicas de la página del carrito, como proceder al pago
}

export default CartPage;