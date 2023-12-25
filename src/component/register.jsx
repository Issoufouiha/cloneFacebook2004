import React, { useState } from 'react';
import '../App.css'
import NavBar from './Navbar';
import Sidebars from "./sidebars";
import Footer from './footer';
import toast, { Toaster } from 'react-hot-toast';
import { auth, firestore } from '../firbase-config';
const notifyError = () => toast.error('Un erreur est survenu');
const notifySucces = () => toast.success('Bienvenue en 2004');

export default function Welcom() {
    const [names, setNames] = useState('');
    const [statu, setStatu] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
          // Créez l'utilisateur avec email et mot de passe
          const userCredential =  auth.createUserWithEmailAndPassword(email, password);
    
          // Ajoutez des informations supplémentaires à la base de données Firestore
          await firestore.collection('users').doc(userCredential.user.uid).set({
            names,
            statu,
          });
    
          console.log('Utilisateur enregistré avec succès !');
        } catch (error) {
            console.log('Utilisateur non enregistre!');
        }
      };
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
                <form>
                            {/* register your input into the hook by invoking the "register" function */}
                            <label htmlFor="">names</label>
                                <input placeholder='names' required onChange={(e)=>setNames(e.target.value)} /> <br/>
                                <label htmlFor="">Genre</label>
                                <select required  onChange={(e)=>setStatu(e.target.value)} >
                                    <option value="Celibataire">Celibataire</option>
                                    <option value="Marié">Celibataire</option>
                                    <option value="autre">autre</option>
                                </select><br/>
                            <label htmlFor="">Email</label>
                                 <input  placeholder='Email' required onChange={(e)=>setEmail(e.target.value)} /><br/>
                            <label htmlFor="">Password</label>
                                 <input  placeholder='Password' required onChange={(e)=>setPassword(e.target.value)}  />
                            <input type="submit" onClick={handleRegister} />
                </form>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <div style={{flexDirection:'column'}}>
                            <div>
                                <label> Name:</label>
                                <input defaultValue="test" {...register("example")} />
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
                                <input defaultValue="test" {...register("example")} />
                            </div>
                            <div>
                                <label htmlFor="">Password*</label>
                                <input defaultValue="test" {...register("example")} />
                            </div>
                            <div>
                                <input defaultValue="checkbox"{...register("example")} />
                                <label>I have read understood the<li>Terms of Use</li>and I agree to them</label>
                                <p>* you can choose any password.It does not have to be, and should not be, your FAS password.</p>
                            </div>
                            <div style={{justifyContent:'center', margin:'auto', display:'flex'}}>
                                <input type="submit">registre Now !</input>
                            </div>
                        </div>
                </form> */}
            </div>

        </div>
        <Footer/>
    </div>
  )
}

