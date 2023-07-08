import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../Reducer/reducer';

function Subtotal() {


    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();

    return (
        <>
            <CurrencyFormat
                renderText={(value) => (
                    <>

                        <p className='m-0'>Subtotal ({basket.length} Items) : <small>$</small><strong>{value}</strong></p>
                        <small className='subtotal-gift'>

                            <input type="checkbox" /> This order contains a gift

                        </small>

                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
            />
            <button className='border-0 bg-warning py-1 rounded w-100'>Proceed to Checkout</button>
        </>
    )
}

export default Subtotal