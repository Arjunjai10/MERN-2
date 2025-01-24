import React from 'react';
import { Link } from 'react-router-dom'; 
import '../CSS/Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    var styling = { 
        textDecoration: "none", 
        listStyleType: "none", 
        textAlign: "center"
    };
    var [dropdown,showDropdown] = useState(true)
    const toggleDrop = () => {
        showDropdown(dropdown = !dropdown)
    }
    return (
        <header>
            <nav>   
                <ol style={styling}>
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/about" className='link'>About</Link></li>
                    <li><Link to="/gallery" className='link'>Gallery</Link></li>
                    <li><Link to="/contact" className='link'>Contact</Link></li>
                    <li><Link to="/sign-up" className='link'>Sign-up</Link></li>
                    <li><Link to="/login" className='link'>Login</Link></li>

                    <div>
                    <span onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>Hooks</span>
                    {dropdown && (
                    <ul>
                        <li><Link to="/useState" >UseState</Link></li>
                        <li><Link to="/useeffect" >UseEffect</Link></li>
                        <li><Link to="/usecallback">UseCallback</Link></li>
                        <li><Link to="/useeffectapi" >UseEffectAPI</Link></li>
                        <li><Link to="/useeffectimage" >UseEffectAPIimage</Link></li>
                        <li><Link to="/usereducer" >UseReducer</Link></li>
                        <li><Link to="/useref" >UseRef</Link></li>
                        <li><Link to="/usememo" >UseMemo</Link></li>
                        <li><Link to="/list" >List</Link></li>
                    </ul>)}
                    </div>
                </ol>
            </nav>
        </header>
    );
};
export default Navbar;