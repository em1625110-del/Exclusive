import 'react'
import './style.scss'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
function Header() {
  return (
    <div className="header">
       <div className="top-header">
        <div className="header-content container">
      <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!       <Link>ShopNow</Link></p>
       <select>
        <option value="kg">KGZ</option>
        <option value="en">ENG</option>
        <option value="ru">RUS</option>
       </select>
        </div>
       </div>
       <div className="main-header container">
        <div className="main-left">
            <Link>Exclusive</Link>
            <ul>
              <li><Link to={'/'}>Home</Link></li>
              <li><Link to={'.contact'}>Contact</Link></li>
              <li><Link to={'/about'}>About</Link></li>
              <li><Link to={'/signup'}>Sign Up</Link></li>
            </ul>
        </div>
        <div className="main-right">
       <div className="search">
        <input type="search" placeholder="Search for products" />
        <button><Link><CiSearch /></Link></button>
       </div>
       <div className="icons">
        <button><Link><CiHeart /></Link></button>
        <button><Link><IoCartOutline /></Link></button>
       </div>
        </div>
       </div>
    </div>
  )
}

export default Header
