import React from 'react'
import './Rigaster.css'
import logo2 from '../../assets/img/logo2.png'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Rigaster = () => {
    return(
    <div id='divo'>
        <div id='blackHeader'>
        <a htmlFor='password' className='ainputs'>About</a>
        <a htmlFor='password' className='ainputs'>fgh</a>
            
        </div>
        <div className=''>
            <img id='logo2' src={logo2} alt='' />
        </div>
        <div id='main-div' className="">

            <div className="">
                <div className="">
                    <div className=''>

                        <h1 className=''>Create Account</h1>
                        <div className=''>
                            <label htmlFor='name' className='linputs'>Name</label>
                            <input type='text' id="name" className='inputs' />
                        </div>
                        <div className=''>
                            <label htmlFor='email' className='linputs'>Email Address</label>
                            <input type='email' id="email" className='inputs' />
                        </div>
                        <div className=''>
                            <label htmlFor='password' className='linputs'>Password</label>
                            <input type='password' id="password" className='inputs' />
                        </div>
                        <div className=''>
                            <label htmlFor='password_confirmation' className='linputs'>Password Confirmation</label>
                            <input type='password' id="password_confirmation" className='inputs' />
                        </div>
                        <div className=''>
                            <div className=''>
                                {/* <Link className='btn btn-dark w-100' to='/login'>Go To Login</Link> */}
                            </div>
                            <div className=''>
                                <button
                                    className=''>Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Rigaster