import React,{useState,useEffect} from 'react';
import "../Chat.css";
import {useParams} from "react-router-dom";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import db from "../firebase";
import File from "./File";
import FileScan from "./FileScan";

function FileUpload() {
  const [Files, setFiles] = useState([])
  useEffect(()=>{
    db.collection('Files')
    .doc('userfiles')
    .collection('files')
    .orderBy('timestamp','asc')
    .onSnapshot(snapshot =>
        setFiles(snapshot.docs.map((doc) => doc.data()))
  )
})

  return (
    <div className="chat">
        <div className="chat__header">
            <div className="chat__headerLeft">
                <h4 className="chat__channelName">
                    <strong># Files</strong>
                    <StarBorderOutlinedIcon/>
              </h4>
         </div>
            <div className="chat__headerRight">
                <p>
                    <InfoOutlinedIcon /> Details
                </p>
            </div>
        </div>


        <div className="chat__messages">
           {Files.map(({url,timestamp,username,userimage}) => (
               <File
               url={url}
               timestamp={timestamp}
               username={username}
               userimage={userimage}
               />
           ))}
        </div>
        <FileScan />
    </div>
    )

}

export default FileUpload
