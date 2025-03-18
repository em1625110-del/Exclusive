import 'react'
import { VscSend } from "react-icons/vsc";
import { RiFacebookLine } from "react-icons/ri";
import { PiTwitterLogoLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import download from './img/download-appstore.png'
import Google from './img/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png'
import AppStore from './img/Qrcode 1.png'
import './style.scss'
function Footer() {
  return (
    <footer>
       <div className='footer container'>
        <div className='footer-logo '>
          <h1>Exclusive</h1>
          <h2>Subscribe</h2>
          <ul>
            <li className='footerTextP'>Get 10% off your first order</li>
          </ul>
          <div className='footer-search'>
          <input type="search" placeholder='Enter your email' />
         <button><VscSend />
         </button>
          </div>
        </div>
        <div className="support">
          <h1>Support</h1>
          <ul>
            <li>111 Bijoy sarani, Dhaka, <br />  DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </div>
        <div className="account">
          <h1>Account</h1>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        <div className="quick-link">
          <h1>
            Quick Link
          </h1>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="download-app">
          <h1>Download App</h1>
          <ul>
            <li>Save $3 with App New User Only</li>
            <div className='googleis'>
                <img src={AppStore} alt="" />
              <div>
                <img src={Google} alt="" />
              <img src={download} alt="" />
              </div>
            </div>
          </ul>
          <div className='icons-4'>
            <button><RiFacebookLine />
            </button>
            <button><PiTwitterLogoLight />
            </button>
            <button><FaInstagram />
            </button>
            <button><FaLinkedinIn />
            </button>
          </div>
        </div>
       </div>
    </footer>
  )
}

export default Footer
