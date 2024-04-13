import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
function AddProduct() {
    const [image,setImage] = useState(false);
    const [prductDetails,setProductDetails] = useState({
        name:'',
        image:'',
        category:'women',
        new_price:'',
        old_price:''
    })
    const resetForm = () => {
        setProductDetails({
            name: '',
            image: '',
            category: 'women',
            new_price: '',
            old_price: ''
        });
        setImage(false);
    };
    // const Add_Product = async () => {

    //     console.log(prductDetails);
    //     let responseData;
    //     let product = prductDetails;
    //     let formData = new FormData();
    //     formData.append('product', image);

    //     await fetch(`https://e-commerce-woad-one.vercel.app/upload`, {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //         },
    //         body: formData,
    //     })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         responseData = data;
    //     });

    //     if (responseData.success) {
    //         product.image = responseData.cloudinary_image_url;
    //         console.log(product);
    //         await fetch(`https://e-commerce-woad-one.vercel.app/addproduct`, {
    //             method: 'POST',
    //             headers: {
    //                 Accept: 'application/json',
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(product),
    //         })
    //         .then((resp) => resp.json())
    //         .then((data) => {
    //             data.success ? alert('Product Added') : alert('Failed');
    //         });
    //         resetForm(); // Reset the form after successful submission
    //     }
    // };

    const Add_Product = async () => {
        try {
            let responseData;
            let product = prductDetails;
            let formData = new FormData();
            formData.append('product', image);
    
            const uploadResponse = await fetch(`https://backend-bice-five-39.vercel.app/upload`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });
            
            if (!uploadResponse.ok) {
                throw new Error('Failed to upload image');
            }
    
            const uploadData = await uploadResponse.json();
            responseData = uploadData;
    
            if (responseData.success) {
                product.image = responseData.cloudinary_image_url;
                console.log(product);
                const addProductResponse = await fetch(`https://backend-bice-five-39.vercel.app/addproduct`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(product),
                });
    
                if (!addProductResponse.ok) {
                    throw new Error('Failed to add product');
                }
    
                const addProductData = await addProductResponse.json();
    
                if (addProductData.success) {
                    alert('Product Added');
                    resetForm(); // Reset the form after successful submission
                } else {
                    alert('Failed to add product');
                }
            } else {
                alert('Failed to upload image');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred while processing your request');
        }
    };
    

    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    }
    const changeHandler = (e)=>{
        setProductDetails({...prductDetails,[e.target.name]:e.target.value})
    }
    return (
        <div className='addproduct'>
            <div className="itemfield">
                <p> Product Title </p>
                <input type="text" value={prductDetails.name} onChange={changeHandler} name='name' placeholder='Enter Title' />
            </div>
            <div className='price'>
                <div className='itemfield'>
                    <p>Price</p>
                    <input type="text" value={prductDetails.old_price} onChange={changeHandler} name='old_price' placeholder='Enter the price' />
                </div>
                <div className='itemfield'>
                    <p>Offer Price</p>
                    <input type="text" name='new_price' value={prductDetails.new_price} onChange={changeHandler} placeholder='Enter the price' />
                </div>
            </div>
            <div className='itemfield'>
                <p>Product Category</p>
                <select name="category" className='add-category' value={prductDetails.category} onChange={changeHandler}>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="itemfield">
            <p>Product Image</p>
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):upload_area} alt="" className='thumbnail' />
                </label>
                <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
            </div>
            <button onClick={()=>{Add_Product()}}>ADD</button>

        </div>
    )
}

export default AddProduct
