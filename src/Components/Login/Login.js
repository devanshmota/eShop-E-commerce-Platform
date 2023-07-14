import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { auth } from '../Firebase/Firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {

                if (auth) {

                    navigate('/');
                }

            })
            .catch((error) => alert(error.message))

    }
    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                navigate('/');
            })
            .catch(error => alert(error.message))

    }

    return (
        <>
            <div className="container">
                <div className="row flex-column">
                    <div className="col-sm-4 offset-4">
                        <div className='logo d-flex justify-content-center py-5'>
                            <i class="fa-solid fa-store align-self-center me-1 text-warning h3"></i>
                            <h3>eSHOP</h3>
                        </div>


                        <form className='form d-flex flex-column bg-white p-4 rounded'>
                            <h2 className='pb-2'>Sign-in</h2>


                            <label htmlFor="email">Email</label>
                            <input type="email" id='Email' value={email} className='allInputs rounded px-2 mt-1 border border-dark' onChange={e => setEmail(e.target.value)} />

                            <label htmlFor="password" className='mt-1'>Password</label>
                            <input type="password" id='password' value={password} className='allInputs rounded px-2 mt-1 border border-dark' onChange={e => setPassword(e.target.value)} />

                            <button type='submit' className='allInputs rounded px-2 mt-4 bg-warning'
                                onClick={signIn}>Sign In</button>

                            <p className='paragraph m-0 mt-3'>
                                By signing-in you agree to the eShop Website Conditions of Use & Sale. Please
                                see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                            </p>

                            <button onClick={register} className='allInputs-last rounded px-2 mt-2 border-0'>Create Your eShop Account</button>
                        </form>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Login