import React from 'react'
import phone from '../../assets/img/image.png.png'
import './style.scss'
import { Link } from 'react-router-dom'
function SignIn() {
  return (
    <div>
       <div className='Sign-In'>
            <div className='item-signin'>
              <div>
                     <img src={phone} alt="" width={845} height={781}/>
                      </div>
              <div className="signin">
                  <h2>Log In to Exclusive</h2>
                  <p>Enter your details below</p>
                  <form>
                      <input type="email or number" placeholder="Email or Phone Number" />
                      <input type="password" placeholder="Password" />
                      <div className='submits'>
                      <button type="submit">Log In</button>
                      <Link to={'/'}>Forgot Password?</Link>
                      </div>
                  </form>
                 
              </div>
            </div>
          </div>
    </div>
  )
}

export default SignIn
