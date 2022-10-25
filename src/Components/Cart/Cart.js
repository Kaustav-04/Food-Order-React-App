import React,{useContext} from 'react';
import Modal from '../UI/Modal';
import './Cart.css';
import CartContext from '../../Store/Cart-Context';
import CartItem from './CartItem';

const Cart = (props) => {

    const cartCtx = useContext(CartContext);
    const cartItemAddHandler = (item) =>{
        cartCtx.addItem({...item, amount:1})
    }
    const cartItemRemoveHandler = (id) =>{
        cartCtx.removeItem(id)
    }

    let cartItems = <ul className='cart-items'>
        {cartCtx.items.map(item => <CartItem 
        key = {item.id}
        name={item.name} 
        price={item.price}
        amount={item.amount}
        onAdd={cartItemAddHandler.bind(null,item)}
        onRemove={cartItemRemoveHandler.bind(null,item.id)}/>)}
    </ul>

    return (
        <Modal onClose={props.onHideCart}>
            <div>
                {cartItems}
                <div className="total">
                    <span>Total Amount</span>
                    <span>{cartCtx.totalAmount.toFixed(2)}</span>
                </div>
                <div className="actions">
                    <button className="button--alt" onClick={props.onHideCart}>Close</button>
                    <button className="button--cart">Order</button>
                </div>
            </div>
        </Modal>
    );
}

export default Cart;