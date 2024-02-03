import React from 'react';
import {Link} from 'react-router-dom';
import { HiBars3 } from "react-icons/hi2";
import Logo from '../images/logo.png';


const Header = () => {
  return (
    <nav>
      <div className="nav_container nav_content">
        <Link to='/' className='nav_logo'>
          <img src={Logo} alt="Logo" />
        </Link>
        <ul className="nav_menu">
        <li><Link to='login'>Sign in</Link></li>
        <li><Link to='register'>Sign up</Link></li>
          {/* <li><Link to='profile'>Ernest Strong</Link></li> */}
          {/* <li><Link to='create'>Create Post</Link></li> */}
          <li><Link to='authors'>Authors</Link></li>
          <li><Link to='logout'>Logout</Link></li>
        </ul>
        <button className="nav_toggle-btn">
          <HiBars3 />
        </button>
      </div>
    </nav>
  )
}

export default Header