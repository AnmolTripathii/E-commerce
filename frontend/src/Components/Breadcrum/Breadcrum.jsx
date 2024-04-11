// import React from 'react'
// import './Breadcrum.css'
// import arrow from '../Assets/breadcrum_arrow.png'
// function Breadcrum(props) {
//     const {product} =props;
//   return (
//     <div className='breadcrum'>
//       HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
//     </div>
//   )
// }

// export default Breadcrum
import React from 'react';
import PropTypes from 'prop-types';
import './Breadcrum.css';
import arrow from '../Assets/breadcrum_arrow.png';

function Breadcrum({ product }) {
    // Add a conditional check for the product object
    if (!product) {
        return <div className='breadcrum'>HOME</div>; // or any other placeholder or loading state
    }

    return (
        <div className='breadcrum'>
            HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name}
        </div>
    );
}

Breadcrum.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.string,
        name: PropTypes.string,
        // Add more properties as needed
    }),
};

export default Breadcrum;
