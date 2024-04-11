
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

function ProductDisplay({ product }) {
    const { addToCart } = useContext(ShopContext);

    // Add a conditional check for the product object
    if (!product) {
        return <div>Loading...</div>; // or any other placeholder or loading state
    }

    return (
        <div className='pro'>
            <div className='pro_dispay_left'>
                <div className="left_img_list">
                    {/* You can add similar conditional checks for other properties */}
                    {product.image && <img src={product.image} alt="" />}
                    {product.image && <img src={product.image} alt="" />}
                    {product.image && <img src={product.image} alt="" />}
                    {product.image && <img src={product.image} alt="" />}
                    {/* Add conditional checks for other images */}
                </div>
                
                {/* Add conditional check for main image */}
                {product.image && <img className='pro_display_main_img' src={product.image} alt="" />}
            </div>
            <div className='pro_display_right'>
                <h1>{product.name}</h1>
                <div className='pro_right_stars'>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="pro_right_prices">
                    <div className='pro_display_old'>${product.old_price}</div>
                    <div className='pro_display_new'>${product.new_price}</div>
                </div>
                <div className="pro_display_right_dis">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto inventore obcaecati fugiat, placeat minima cumque ipsa aliquid. Numquam optio corrupti assumenda dolores facilis.
                </div>
                <div className="pro_display_right_size">
                    <h1>Select Size</h1>
                    <div className='pro_display_right_sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XXL</div>
                        <div>XXXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className='pro_right_category'><span>Category:</span> {product.category.toUpperCase()}, T-Shirt, Crop Top</p>

                <p className='pro_right_category'><span>Tags :</span> Mordern,Latest</p>
            </div>
        </div>
    )
}

ProductDisplay.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        image: PropTypes.string,
        name: PropTypes.string.isRequired,
        old_price: PropTypes.number.isRequired,
        new_price: PropTypes.number.isRequired,
        // Add more properties as needed
    }),
};

export default ProductDisplay;

// import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
// import './ProductDisplay.css';
// import star_icon from '../Assets/star_icon.png';
// import star_dull_icon from '../Assets/star_dull_icon.png';
// import { ShopContext } from '../../Context/ShopContext';

// function ProductDisplay({ product }) {
//     const { addToCart, user } = useContext(ShopContext);

//     // Function to add product to cart only if the user is logged in
//     const addToCartHandler = (productId) => {
//         if (user) {
//             addToCart(productId);
//         } else {
//             window.location.replace("/login");
//         }
//     };

//     // Add a conditional check for the product object
//     if (!product) {
//         return <div>Loading...</div>; // or any other placeholder or loading state
//     }

//     return (
//         <div className='pro'>
//             <div className='pro_dispay_left'>
//                 <div className="left_img_list">
//                     {/* You can add similar conditional checks for other properties */}
//                     {product.image && <img src={product.image} alt="" />}
//                     {product.image && <img src={product.image} alt="" />}
//                     {product.image && <img src={product.image} alt="" />}
//                     {product.image && <img src={product.image} alt="" />}
//                     {/* Add conditional checks for other images */}
//                 </div>
                
//                 {/* Add conditional check for main image */}
//                 {product.image && <img className='pro_display_main_img' src={product.image} alt="" />}
//             </div>
//             <div className='pro_display_right'>
//                 <h1>{product.name}</h1>
//                 <div className='pro_right_stars'>
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_icon} alt="" />
//                     <img src={star_dull_icon} alt="" />
//                     <p>(122)</p>
//                 </div>
//                 <div className="pro_right_prices">
//                     <div className='pro_display_old'>${product.old_price}</div>
//                     <div className='pro_display_new'>${product.new_price}</div>
//                 </div>
//                 <div className="pro_display_right_dis">
//                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto inventore obcaecati fugiat, placeat minima cumque ipsa aliquid. Numquam optio corrupti assumenda dolores facilis.
//                 </div>
//                 <div className="pro_display_right_size">
//                     <h1>Select Size</h1>
//                     <div className='pro_display_right_sizes'>
//                         <div>S</div>
//                         <div>M</div>
//                         <div>L</div>
//                         <div>XXL</div>
//                         <div>XXXL</div>
//                     </div>
//                 </div>
//                 <button onClick={() => addToCartHandler(product.id)}>ADD TO CART</button>
//                 <p className='pro_right_category'><span>Category:</span> {product.category.toUpperCase()}, T-Shirt, Crop Top</p>

//                 <p className='pro_right_category'><span>Tags :</span> Mordern,Latest</p>
//             </div>
//         </div>
//     )
// }

// ProductDisplay.propTypes = {
//     product: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         image: PropTypes.string,
//         name: PropTypes.string.isRequired,
//         old_price: PropTypes.number.isRequired,
//         new_price: PropTypes.number.isRequired,
//         // Add more properties as needed
//     }),
// };

// export default ProductDisplay;
