
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import NavbrandLogo from './brandlogo/logo.png'
import './navbar.css'
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [open, setOpen] = useState(false);
    return (
        <>
          <nav>
              <div className="nav-brand">
                <Link to="/" className="navbar-brand image-width"><img src={NavbrandLogo} alt={"brandlogo"} style={{paddingLeft: "48px"}}/> </Link>
              </div>
              <div className="nav-item"  style={{transform: open ? "translateX(0px)" : ""}}>
                <ul>
                  <li><Link to="/login" >Login</Link></li>
                </ul>
              </div>
              <div>
                <i onClick={() => setOpen(!open)}  className="burgar"><FaBars /></i>
              </div>
          </nav>
          </>

    )
}

export default Navbar







// import React from 'react';
// import { Link } from 'react-router-dom';

// function Navbar() {
//       return  (
//         <div>
//             <ul>
//                 <li><Link >Logo</Link></li>
//                 <li><Link to="/">Home</Link></li>
//             </ul>
//         </div>
//     )
// }

// export default Navbar


