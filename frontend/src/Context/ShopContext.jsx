// import React, { createContext, useEffect, useState } from "react";
// // import all_product from "../Components/Assets/all_product";

// export const ShopContext = createContext(null);
// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < 100 + 1; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// }
// const ShopContextProvider = (props) => {
//     const [all_product, setAll_Product] = useState([])
//     const [cartItems, setCartItems] = useState(getDefaultCart())
//     useEffect(() => {
//         fetch(`https://e-commerce-13p7ha16g-anmols-projects-8415e94a.vercel.app/allproducts`)
//             .then((response) => response.json())
//             .then((data) => setAll_Product(data))
//             .catch((error) => console.error('Error fetching products:', error));
//             if(localStorage.getItem('auth-token')){
//                 fetch(`https://e-commerce-13p7ha16g-anmols-projects-8415e94a.vercel.app/getcart`, {
//                     method: 'POST',
//                     headers: {
//                         Accept: 'application/form-data',
//                         'auth-token': `${localStorage.getItem('auth-token')}`,
//                         'Content-Type': 'application/json',
//                     },
//                     body: "",
//                 })
//                 .then((response) => response.json())
//                 .then((data) => setCartItems(data));
                
//             }
//     }, []);
//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//         if (localStorage.getItem('auth-token')) {
//             fetch(`https://e-commerce-13p7ha16g-anmols-projects-8415e94a.vercel.app/addtocart`, {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json', // Corrected header
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ "itemId": itemId }) // Corrected key name to match server-side
//             })
//             .then((response) => response.json())
//             .then((data) => console.log(data));
//         }
//     }

    
    

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
//         if(localStorage.getItem('auth-token')){
//             fetch(`https://e-commerce-13p7ha16g-anmols-projects-8415e94a.vercel.app/removefromcart`, {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json', // Corrected header
//                     'auth-token': localStorage.getItem('auth-token'),
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({ "itemId": itemId }) // Corrected key name to match server-side
//             })
//             .then((response) => response.json())
//             .then((data) => console.log(data));
//         }
//     }
//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = all_product.find((product) => product.id === Number(item))
//                 totalAmount += itemInfo.new_price * cartItems[item];

//             }

//         }
//         return totalAmount;
//     }
//     const getTotalCartItem = () => {
//         let totalItem = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 totalItem += cartItems[item];
//             }
//         }
//         return totalItem
//     }

//     const contextValue = { getTotalCartItem, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };


//     return (
//         <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
//     )
// }
// export default ShopContextProvider;



// /* Explaination of above function working
// setCartItem((prev) => { ... }): This is updating the state of the shopping cart items. It takes a function as an argument, where prev represents the previous state of the cart items.

// { ...prev, [itemId]: prev[itemId] + 1 }: This line constructs the new state object for the shopping cart items. It spreads the previous state (prev) using the spread operator (...prev) to include all existing items. Then, it updates the quantity of the item specified by itemId. If the item exists in the cart (prev[itemId]), it increments its quantity by 1 (prev[itemId] + 1). If the item doesn't exist yet, it adds it to the cart with a quantity of 1.

// So, essentially, this function addToCart is used to increment the quantity of a specific item in the shopping cart. If the item doesn't exist in the cart, it adds it with a quantity of 1.*/


import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 100 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch(`https://e-commerce-13p7ha16g-anmols-projects-8415e94a.vercel.app/allproducts`)
            .then((response) => response.json())
            .then((data) => setAll_Product(data))
            .catch((error) => console.error('Error fetching products:', error));
        
        if (localStorage.getItem('auth-token')) {
            fetch(`https://e-commerce-13p7ha16g-anmols-projects-8415e94a.vercel.app/getcart`, {
                method: 'POST',
                headers: {
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                },
            })
            .then((response) => response.json())
            .then((data) => setCartItems(data))
            .catch((error) => console.error('Error fetching cart:', error));
        }
    }, []);

    const addToCart = (itemId) => {
        if (localStorage.getItem('auth-token')) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
            fetch(`https://e-commerce-13p7ha16g-anmols-projects-8415e94a.vercel.app/addtocart`, {
                method: 'POST',
                headers: {
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId })
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error adding to cart:', error));
        } else {
            window.location.replace("https://e-commerce-13p7ha16g-anmols-projects-8415e94a.vercel.app/login");
        }
    }

    const removeFromCart = (itemId) => {
        if (localStorage.getItem('auth-token')) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
            fetch(`https://e-commerce-13p7ha16g-anmols-projects-8415e94a.vercel.app/removefromcart`, {
                method: 'POST',
                headers: {
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "itemId": itemId })
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.error('Error removing from cart:', error));
        } else {
            console.log("User not logged in. Cannot remove from cart.");
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = { getTotalCartItem, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )
}

export default ShopContextProvider;
