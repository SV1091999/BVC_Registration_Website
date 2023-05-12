import React from 'react';
 
 import { Link } from "react-router-dom";
 import '../css/App.css'

const Menu = () => {
    return (
        <> 
            <div class="div-wrapper">
             
                <Link to="/registration"className='myroute'>Registration</Link>
                <Link to="/about" className='myroute'>About</Link>
                <Link to="/contact" className='myroute'>Contact</Link>
                {/* <Link to="/Administration" className='myroute'>Administration</Link> */}
            </div>
        </>     
       
    )
}
 
export default Menu;