import React,{useState,useEffect} from 'react';
import "../People.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import PeopleDetails from"./PeopleDetails";
import db from "../firebase";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function People() {
    const[userDetails,setUserDetails]=useState([])
    useEffect(()=>{
        db.collection("users").onSnapshot((snapshot) => {
			setUserDetails(
				snapshot.docs.map((doc) => ({
					username: doc.data().username,
                    userimage:doc.data().userimage,
                    useremail:doc.data().Useremail
				}))
			)
		})
        
    })
    console.log(userDetails);
    return (
     <div className="people">
         <div className="people__header">
            <div className="people__headerLeft">
                <h4 className="people__channelName">
                    <strong># People & User groups</strong>
                    <StarBorderOutlinedIcon/>
              </h4>
             </div>
            <div className="people__headerRight">
                <p>
                    <InfoOutlinedIcon /> Details
                </p>
            </div>
        </div>
        <hr/>
        <h4 className="members">Members  <FiberManualRecordIcon /></h4>
        <hr/>
        <div className="people__details"> 
            {userDetails.map(({username,userimage,useremail})=>(
                <PeopleDetails 
                username={username}
                userimage={userimage}
                useremail={useremail}
                />
            ))}
        </div>
     </div>
    )
}

export default People
