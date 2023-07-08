import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';


function Header() {
    const { basket } = useStateValue()[0];
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-dark text-white py-2">
                    <div className="col-1 header_logo d-flex justify-content-center">
                        <Link to='/' className='d-flex align-items-center justify-content-center text-decoration-none text-white'>
                            <i class="fa-solid fa-store align-self-center me-1 text-warning"></i>
                            <h4 className="ms-1">eSHOP</h4>
                        </Link>
                    </div>


                    <div className="col-9 d-flex align-items-center p-0">
                        <input type="text" className="form-control w-100" />
                        <i class="fa fa-search text-black bg-warning" aria-hidden="true"></i>
                    </div>
                    <div className="col-2 d-flex align-items-center justify-content-around">
                        <Link to='/login' className="header_signIn d-flex flex-column lh-1 text-white text-decoration-none">
                            <span className='greet flex-start'>Hello Guest</span>
                            <span className='signIn fw-bold'>Sign In</span>
                        </Link>
                        <Link to='/' className="header_shop d-flex flex-column lh-1 text-white text-decoration-none">
                            <span className='your'>Your</span>
                            <span className='shop fw-bold'>Shop</span>
                        </Link>
                        <Link to='/checkout' className='text-decoration-none text-white'>
                            <div className="header_basket">
                                <i class="fa-solid fa-basket-shopping me-1"></i>
                                <span className='ms-1 fw-bold'>{basket.length}</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header