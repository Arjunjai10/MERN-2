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
    var [dropdown,showDropdown] = useState(false)
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
                    <div>
                    <span onMouseEnter={toggleDrop} onMouseLeave={toggleDrop}>Hooks</span>
                    {dropdown && (
                    <ul>
                        <li><Link to="/useState">useState</Link></li>
                        <li><Link to="/useEffect" >useEffect</Link></li>
                        <li><Link to="/useEffectAPI" >useEffectAPI</Link></li>
                        <li><Link to="/useEffectAPIimage" >useEffectAPIimage</Link></li>
                        <li><Link to="/useReducer" >useReducer</Link></li>
                        <li><Link to="/useRef" >useRef</Link></li>
                    </ul>)}
                    </div>
                    <li><Link to="/sign-up" className='link'>Sign-up</Link></li>
                    <li><Link to="/login" className='link'>Login</Link></li>
                    <li><Link to="/logout" className='link'>Logout</Link></li>
                    
                    
                </ol>
            </nav>
        </header>
    );
};
export default Navbar;