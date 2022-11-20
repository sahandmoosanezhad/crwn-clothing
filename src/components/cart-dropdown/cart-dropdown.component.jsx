import CustomButton from "../custom-buttton/custom-button.component";

import './cart-dropdown.styles.scss';

const CartDropdown = () => (
    <div className="cart-drowndown">
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

export default CartDropdown;