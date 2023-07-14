import React from 'react'
import { useStateValue } from '../../StateProvider';

function Product({ id, title, price, rating, image }) {

    const dispatch = useStateValue()[1];

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id,
                title,
                image,
                price,
                rating
            }
        })
    }


    return (
        <>
            <div className="product-item text-center bg-white p-3 w-100">
                <p className='text-start m-0'>{title}<br /><small>$</small> <strong>{price}</strong><br />
                    {Array(rating).fill().map((_, index) => (<span key={index}>⭐</span>))}
                </p>


                <img src={image} alt="product" className=' product_image my-5' />

                <button onClick={addToBasket} className='text-black bg-warning border-0 rounded px-3 py-1'>Add to Basket</button>
            </div>
        </>
    )
}

export default Product