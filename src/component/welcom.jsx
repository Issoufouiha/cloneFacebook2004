import React from 'react';
import '../App.css'
import NavBar from './Navbar';
import Sidebars from "./sidebars";
import Footer from './footer';

export default function Welcom() {
  return (
    <div className='Well'>
       <NavBar/>
        <div style={{display:'flex'}}>
          <Sidebars/>
              <div>
                   <div className='titre'>
              <h6 style={{color:'white', textAlign:'start'}}>Welcom to thefacebook</h6>
            </div>
                 <h1>[ welcome to thefacebook]</h1>
                    <p  style={{textAlign:'start'}}>thefacebook is an online directory that connects people through social networks at <br /> colleges</p>
                    <p  style={{textAlign:'start'}}>we have opened up thefacebook for popular consumption at <strong>Codeloccol</strong></p>
                    <p style={{textAlign:'start'}}>you can use thefacebbok to:</p>
                      <ul>
                          <li className='myli'>search for people at your school</li>
                          <li className='myli'>Find out who are in your classes</li>
                          <li className='myli'>Look up your friend 'friends</li>
                          <li className='myli'>see a visialization of your social network</li>
                      </ul>
                        <p  style={{textAlign:'start'}}>To get started, click below to registre. If you have already registered, you can log in.</p>
                          <div style={{ display : 'flex',gap:'5px', margin:'auto', justifyContent:'center'}}>
                                    <button>registre</button>
                                    <button>login</button>
                          </div>

              </div>
        </div>
        <Footer/>
    </div>
  )
}
