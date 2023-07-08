import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider';

function CheckoutProduct({ id, title, price, rating, image }) {

    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKTE",
            id: id
        })
    }

    return (
        <>
            <div className="checkoutProduct d-flex align-items-center mt-4">
                <div className="checkoutProduct-img">
                    <img src={image} alt="" />
                </div>

                <div className="checkoutProduct-info">
                    <p className='checkoutProduct-title ps-3 h5'>
                        {title} <br />
                        <small>$</small>
                        <strong>{price}</strong> <br />
                        {Array(rating).fill().map(() => (<span>⭐</span>))}
                    </p>
                    <button onClick={removeFromBasket} className='text-black bg-warning border-0 rounded px-3 py-1 ms-3'>Remove From Basket</button>
                </div>
            </div>

        </>
    )
}

export default CheckoutProduct