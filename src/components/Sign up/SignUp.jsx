import React from 'react'
import { Link } from 'react-router-dom'
import phone from '../../assets/img/image.png.png'
import google from '../../assets/img/Icon-Google.png'
import './style.scss'
function SignUp() {
  return (
    <div className='Sign-Up'>
      <div className='item-signup'>
        <div>
        <img src={phone} alt="" width={845} height={781}/>
        </div>
        <div className="signup">
            <h2>Create an account</h2>
            <p>Enter your details below</p>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email or number" placeholder="Email or Phone Number" />
                <input type="password" placeholder="Password" />
                <button type="submit">Create Account</button>
            </form>
              <div className='from-google'>
                <div>
                <img src={google} alt="" />
                </div>
                <p>Sign up with Google</p>
              </div>
            <p className='sing-tag-p'>Already have an account?<Link to={'/signin'}>Login</Link></p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
