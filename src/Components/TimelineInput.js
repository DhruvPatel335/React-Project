import React, {useState} from 'react'
import "../TimelineInput.css"
import db from '../firebase';
import firebase from "firebase"
import {useStateValue} from "./StateProvider";


function TimelineInput() {

    const [input,setInput]=useState('');
    const [{user}]=useStateValue();

    const sendMessage =(e)=>{
        e.preventDefault();


      
            db.collection('rooms').doc('Timeline').collection("messages").add({
                message:input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                username:user.displayName,
                userimage:user.photoURL,
            })
        
    }
    return (
        <div className='TimelineInput'>
            <form >
                <input 
                value={input} 
                onChange={e=>setInput(e.target.value)}
                placeholder={`#Task & Description`} />
                <button type="submit" onClick={sendMessage} >
                    SEND 
                </button>
            </form>
            {/* <form>
                <input
                value={input1}
                onChange={e=>setInput1(e.target.value)}
                placeholder={`Task Deadline`}/>
                <button type="submit" onclick={sendMessage}>
                    SEND
                </button>
            </form> */}
        </div>
          
    )
}

export default TimelineInput