import React from 'react';
import { Link } from 'react-router-dom'
import Userimage from   '../photofeedimages/imag1.jpg';
import './photofeed.css'


function PhotofeedUser() {
    return (
        
            <div className="photofeedUserContent">
                <div className="photofeedUser-image">
                    <img src={Userimage} alt={"userImage"}/>
                </div>
                <div className="photofeedUser-identity">
                  <Link to="user-profile" style={{textDecoration: 'none', color: '#000'}}><span >Austine Sani</span><br /><span>Kaduna</span></Link>  
                </div>
            </div>
    )
}

export default PhotofeedUser
