import './cart-icon.styles.scss';
import { connect, Connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag-svgrepo-com.svg';

const cartIcon = ({mapDispatchToProps}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shoping-icon' />
        <span className='item-count'>0</span>
    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(cartIcon); 
