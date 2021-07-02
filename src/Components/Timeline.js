// import React,{useState,useEffect} from 'react';
// import "../Timeline.css";
// import {useParams} from "react-router-dom";
// import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
// import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
// import db from "../firebase";
// import Message from "./Message";
// import TimelineInput from "./TimelineInput";
// function Timeline() {
//     const {timeline}=useParams();
//     const[roomDetails,setRoomDetails1]=useState(null)
//     const [roomMessages, setRoomMessages1] = useState([])
//     useEffect(() => {
//         if (timeline) {
//             db.collection('rooms')
//             .doc(timeline)
//             .onSnapshot(snapshot => setRoomDetails1(snapshot.data()))
//         }
//         db.collection('rooms')
//         .doc(timeline)
//         .collection('messages')
//         .orderBy('timestamp','asc')
//         .onSnapshot(snapshot =>
//             setRoomMessages1(snapshot.docs.map((doc) => doc.data()))
//         )
       
//     }, [timeline])
//     console.log(roomDetails);
//     console.log("Messages >>>", roomMessages);
//     return ( 
//         <div className="Timeline">  
//             <div className="Timeline__header">
//                 <div className="Timeline__headerLeft">
//                     <h4 className="Timeline__channelName">
//                         <strong>#{roomDetails?.timeline}</strong>
//                         <StarBorderOutlinedIcon/>
//                   </h4>
//              </div>
//                 <div className="Timeline__headerRight">
//                     <p>
//                         <InfoOutlinedIcon /> Details
//                     </p>
//                 </div>
//             </div>
        
    
//             <div className="Timeline__messages">
//                {roomMessages.map(({message,timestamp,username,userimage}) => (
//                    <Message
//                    message={message}
//                    timestamp={timestamp}
//                    username={username}
//                    userimage={userimage}
//                    />
//                ))}
//             </div>
//             <TimelineInput channelName={roomDetails?.timeline} channelId={timeline} />
//         </div>
//         )
    
//     }
    
//     export default Timeline;

import React,{useState,useEffect} from 'react'
import "../Timeline.css";
import{useParams} from "react-router-dom"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import db from "../firebase"
import TimelineInput from "./TimelineInput"
import TimelineMessage from "./TimelineMessage";
function Timeline() {
    const[roomDetails,setRoomDetails]=useState(null);
    const[roomMessages, setRoomMessages]=useState([]);
    useEffect(() => {
        if ('Timeline') {
                 db.collection('rooms')
                .doc('Timeline')
                .onSnapshot(snapshot => setRoomDetails(snapshot.data()))
        }
        db.collection('rooms')
        .doc('Timeline')
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot(snapshot =>
            setRoomMessages(snapshot.docs.map((doc) => doc.data()))
        )
    });

    console.log(roomDetails);
    return (
        <div className="timeline">
            <div className="timeline__header">
                <div className="timeline__headerLeft">
                <h4 className="timeline__channelName">
                    <strong># Timeline</strong>
                    <StarBorderOutlinedIcon />
                </h4>
                </div>
                <div className="timeline__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            {/* <div className="Timeline__messages">
              {roomMessages.map(({message,timestamp,username,userimage}) => (
                   <TimelineMessage
                   message={message}
                   timestamp={timestamp}
                   username={username}
                   userimage={userimage}
                   />
               ))}
            </div> */}
            <div className="timeline-container">
            {roomMessages.map(({message,timestamp,username,userimage}) => (
                   <TimelineMessage
                   message={message}
                   timestamp={timestamp}
                   username={username}
                   userimage={userimage}
                   />
               ))}
            </div>
            <TimelineInput  />
        </div>
        )
}

export default Timeline
