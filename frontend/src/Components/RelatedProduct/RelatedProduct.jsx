// import React, { useState, useEffect, useRef } from 'react';
// import './RelatedProduct.css';
// import Item from '../Item/Item';

// function RelatedProduct({ product }) {
//   const [relatedProducts, setRelatedProducts] = useState([]);
//   const productRef = useRef(product);

//   useEffect(() => {
//     // Update the reference to the product when it changes
//     productRef.current = product;
//   }, [product]);

//   useEffect(() => {
//     // Fetch related products only if the product object is defined
//     if (productRef.current && productRef.current.category) {
//       fetch(`https://e-commerce-virid-phi.vercel.app/relatedproducts/${productRef.current.category}`)
//         .then((response) => response.json())
//         .then((data) => setRelatedProducts(data))
//         .catch((error) => console.error('Error fetching related product:', error));
//     }
//   }, [productRef.current]); // Run this effect whenever productRef.current changes
  
//   return (
//     <div>
//       <div className='relatedpros'>
//         <h1>Related Product</h1>
//         <hr />
//         <div className="relatedpros-item">
//           {relatedProducts.map((item, i) => (
//             <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RelatedProduct;
import React, { useState, useEffect, useRef } from 'react';
import './RelatedProduct.css';
import Item from '../Item/Item';

function RelatedProduct({ product }) {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const productRef = useRef(product);

  useEffect(() => {
    productRef.current = product;
  }, [product]);

  useEffect(() => {
    // Ensure product object and category are valid
    if (productRef.current && productRef.current.category) {
      fetch(`https://e-commerce-virid-phi.vercel.app/relatedproducts/${productRef.current.category}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch related products');
          }
          return response.json();
        })
        .then((data) => setRelatedProducts(data))
        .catch((error) => console.error('Error fetching related products:', error));
    }
  }, [product]); // Include product as a dependency

  return (
    <div>
      <div className='relatedpros'>
        <h1>Related Products</h1>
        <hr />
        <div className="relatedpros-item">
          {relatedProducts.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedProduct;
