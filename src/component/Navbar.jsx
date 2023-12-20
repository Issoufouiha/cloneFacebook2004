import React from 'react';
import '../App.css';
import image from "../navbar.JPG";

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
                    <li>loign</li>
                    <li>register</li>
                    <li>about</li>
                </ul>
            </div>
        </nav>

    </div>
  )
}
