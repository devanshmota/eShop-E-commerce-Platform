import React, { useState, useEffect } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';
import { auth } from '../Firebase/Firebase';


function Header() {
    const { basket } = useStateValue()[0];
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        auth.onAuthStateChanged(user => {
            if (user) {
                const email = user.email;
                const username = email.substring(0, email.indexOf('@'));
                setUser(username);

            } else {
                setUser(null);
            }
            setIsLoading(false);
        });

    }, []);

    const handleSignOut = () => {

        auth.signOut();
    };
    if (isLoading) {
        return null;
    }
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-dark text-white py-2">
                    <div className="col-1 header_logo d-flex justify-content-center">
                        <Link to='/' className='d-flex align-items-center justify-content-center text-decoration-none text-white'>
                            <i className="fa-solid fa-store align-self-center me-1 text-warning"></i>
                            <h4 className="ms-1">eSHOP</h4>
                        </Link>
                    </div>


                    <div className="col-8 d-flex align-items-center p-0">
                        <input type="text" className="form-control w-100" />
                        <i className="fa fa-search text-black bg-warning" aria-hidden="true"></i>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-around">
                        {user ? (
                            <div className="header_signIn d-flex flex-column lh-1 text-white text-decoration-none">
                                <span className='greet flex-start'>Hello, {user}</span>
                                <span className='signIn fw-bold' onClick={handleSignOut}>Sign Out</span>
                            </div>
                        ) : (
                            <Link to='/login' className="header_signIn d-flex flex-column lh-1 text-white text-decoration-none">
                                <span className='greet flex-start'>Hello, Guest</span>
                                <span className='signIn fw-bold'>Sign In</span>
                            </Link>
                        )}
                        <Link to='/' className="header_shop d-flex flex-column lh-1 text-white text-decoration-none">
                            <span className='your'>Your</span>
                            <span className='shop fw-bold'>Shop</span>
                        </Link>
                        <Link to='/checkout' className='text-decoration-none text-white'>
                            <div className="header_basket">
                                <i className="fa-solid fa-basket-shopping me-1"></i>
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