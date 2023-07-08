import React from 'react'
import './Checkout.css';
import CheckoutProduct from '../Checkout Product/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';


function Checkout() {


    // eslint-disable-next-line no-unused-vars
    const [{ basket }, dispatch] = useStateValue();


    return (
        <>
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-sm-9 mt-3">
                        <div className="checkout-left">
                            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout-ad" />
                            <h2 className="checkout__title my-4"> Your Shopping Basket </h2>
                            <hr />


                            {basket.map((item) =>

                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />

                            )}



                        </div>
                    </div>
                    <div className="col-sm-3 mt-3">
                        <div className='checkout-right rounded'>
                            <Subtotal />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Checkout