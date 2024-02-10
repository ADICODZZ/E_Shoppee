import { NavLink } from 'react-router-dom';
import logo from '../logo.png'
import {FaShoppingCart} from 'react-icons/fa'
import './Navbar.css'
import { useSelector } from 'react-redux';
//import { useState } from 'react';

const  Navbar=()=>{

   
    const cart = useSelector((state) => state);

    return(
        <div></div>
        
    )
}

export default Navbar;