import { useContext } from 'react';

import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext)
    const numberOfCartitems = cartCtx.items.reduce((curNumber, item) => {{
        return curNumber, item.totalAmount
    }}, 0)
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Yourr Cart</span>
            <span className={classes.badge}>{numberOfCartitems}</span>
        </button>
    )
}

export default HeaderCartButton;
