import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaBars } from "react-icons/fa";
function Header() {
  const [isNavShowing, setIsNavShowing] = useState (window.innerWidth > 800 ? true : false);

  const closeNavhandler = () => {
    if (window.innerWidth < 800) {
      setIsNavShowing(false);
    } else {
      setIsNavShowing(true)
    }
}
  return (
   <nav>
    <div className="container nav__container">
<Link to="/" className='nav__logo' onClick={closeNavhandler}>
<img src={Logo} alt="Navbar Logo" />
</Link>
{isNavShowing && <ul className="nav_menu">
  <li><Link to= "/profile/sdfsdf" onClick={closeNavhandler}> Ernest Strong</Link></li>
  <li><Link to= "/create" onClick={closeNavhandler}> Create Post</Link></li>
  <li><Link to= "/authors" onClick={closeNavhandler}> Authors</Link></li>
  <li><Link to= "/logout" onClick={closeNavhandler}> Logout</Link></li>
</ul>}
<button className="nav_toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
<div className="hidden"><FaBars /></div>
</button>
    </div>
   </nav>
  )
}

export default Header
