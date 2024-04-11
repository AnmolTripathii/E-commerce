import { useContext } from 'react';
import './CartItems.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { RiCloseLine } from 'react-icons/ri';
import { ShopContext } from '../../Context/ShopContext';

function CartItems() {
    const { getTotalCartAmount,all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartItems'>
            <div className='cart_format_main'>
                <div className='main'>Product</div>
                <div className='main'>Title</div>
                <div className='main'>Price</div>
                <div className='main'>Quantity</div>
                <div className='main'>Total</div>
                <div className='main'>Remove</div>
            </div>
            <hr />

            {all_product.map(e => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartItems_format cart_format_main'>
                                <img src={e.image} alt="" className='product_icon' />
                                <div>{e.name}</div>
                                <div>${e.new_price}</div>
                                <button className='quantity'>{cartItems[e.id]}</button>
                                <div>${e.new_price * cartItems[e.id]}</div>
                                <RiCloseLine className='cart_remove' color="#332927" size={30} onClick={() => { removeFromCart(e.id) }} />
                            </div>
                            <hr />
                        </div>
                    );
                } else {
                    return null; // Or any other suitable placeholder
                }
            })}
            <div className="cartitems-down">
                <div className='cart-total'>
                    <h1>Cart Total</h1>
                    <div>
                        <div className="total-item">
                            <div>Subtotal</div>
                            <div>${getTotalCartAmount()}</div>
                        </div>
                        <hr />
                        <div className='total-item'>
                            <div>Shipping Fee</div>
                            <div>Free</div>
                        </div>
                        <hr />
                        <div className='total-item'>
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT<FaArrowRightLong/></button>
                </div>
                <div className='promotion'>
                    <p className='para'>If you  have a promo code,Enter it here</p>
                    <div className='promo_box'>
                        <input type="text" placeholder='Promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CartItems
