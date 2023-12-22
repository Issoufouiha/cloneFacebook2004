import React from 'react';
import '../App.css';
import image from "../navbar.JPG";
import { Link } from "react-router-dom";

export default function NavBar 
() {
  return (
    <div>
        <nav className='nav'>
            <div className='img'>
                <img src= {image} alt="" />
            </div>
            <div id='ulRigth'>
                <h1 style={{color:'#5688d7'}}>[ thefacebbok ]</h1>
                <ul style={{display:'flex', gap:'15px'}}>
                    <Link to='/login'>loign</Link>
                    <Link to ='/register'>register</Link>
                    <li>about</li>
                </ul>
            </div>
        </nav>

    </div>
  )
}
