import React, { useState,useEffect } from "react";
import "../FileScan.css";
import firebase from "firebase"
import {useStateValue} from "./StateProvider";
import { useStorage } from "./useStorage";
import db from '../firebase';

function FileScan() {
    const [{user}]=useStateValue();
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
  // Getting the progress and url from the hook
    const { progress, url } = useStorage(file);
    const types = ["image/png", "image/jpeg",
     "image/jpg","application/pdf","application/msword",
     "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
     "application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation",
     "application/vnd.rar","video/mp4","audio/mpeg"];

    const handleChange = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (types.includes(selectedFile.type)) {
                setError(null);
                setFile(selectedFile);
            } else {
                setFile(null);
                setError("Please select a file with extension (png,jpg,pdf,docx,doc,ppt,pptx,rar,mp3 and mp4)");
            }
        }
    };
    useEffect(()=>{
    if (url){
        db.collection('Files').doc('userfiles').collection('files').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            username:user.displayName,
            userimage:user.photoURL,
            url: url,
        });}
    },[url])
    return (
        <div className="FileScan">
            <form>
                <input type="file" onChange={handleChange} />
               <div className="progress"> {progress}</div>
               <div className="error">{error}</div>
            </form>

        </div>
    );
}
export default FileScan;