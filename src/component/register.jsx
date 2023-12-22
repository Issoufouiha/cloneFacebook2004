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
                <div className='titre' style={{width:'25rem'}}>
                    <h6 style={{color:'white', textAlign:'start'}}>Welcom to thefacebook</h6>
                </div>
                <p  style={{textAlign:'start'}}>To register for thefacebook.com, just fill in the fields below. you will have a chance to <br /> enter additional information and subnit a picsture once you have registered</p>
                <div style={{flexDirection:'column'}}>
                    <div>
                        <label> Name:</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label> status:</label>
                        <select name="" id="">
                            <option value="Celibataire">Celibataire</option>
                            <option value="Marié">Marié</option>
                            <option value="Compliqué">Compliqué</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor=""> Email</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Password*</label>
                        <input type="text" />
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" />
                        <label>I have read understood the<li>Terms of Use</li>and I agree to them</label>
                        <p>* you can choose any password.It does not have to be, and should not be, your FAS password.</p>
                    </div>
                    <div style={{justifyContent:'center', margin:'auto', display:'flex'}}>
                        <button>registre Now !</button>
                    </div>
                </div>
            </div>

        </div>
        <Footer/>
    </div>
  )
}

