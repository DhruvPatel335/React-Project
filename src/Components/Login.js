
import { Button } from '@material-ui/core'
import React from 'react'
import "../Login.css"
import {auth, provider} from "../firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import db from '../firebase';
import ParticlesBg from 'particles-bg'
import MainLogo from "../assets/Main_logo.png";



function Login() {
    const [state,dispatch]= useStateValue();

    const signIn=()=>{
      auth
        .signInWithPopup(provider)
        .then((result)=>{
          console.log(result);
          db.collection('users').doc(result.user.uid).set({
            username:result.user.displayName,
            userimage:result.user.photoURL,
            Useremail:result.user.email
          })
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });

        })
        .catch((error)=>{
          alert(error.message);
        });

    }

         return (
        <div className="login">
            <div className="login__container">
                <img  src={MainLogo}
                alt="" className=""
                />
                <h1> Sign in to Team Task</h1>
                <p> A place to do your project communication</p>
                <Button onClick={signIn}>Sign in using Google</Button> 
                <ParticlesBg type="circle" bg={true} />
            </div>
        </div>
    )
}

export default Login