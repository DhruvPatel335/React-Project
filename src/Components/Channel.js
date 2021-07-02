import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router';
import db from "../firebase";
import "../Channel.css";
import SidebarOption from './SidebarOption';
import {useStateValue} from "./StateProvider";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import AddIcon from "@material-ui/icons/Add";
function Channel() {
    const[channels, setChannels]=useState([]);
    const [{user}]=useStateValue();

    useEffect(() => {
		db.collection("rooms").onSnapshot((snapshot) => {
			setChannels(
				snapshot.docs.map((doc) => ({
					id: doc.id,
					name: doc.data().name,
				}))
			)
		})
	}, [])
    return (
        <div className="channel">
        <div className="channel__header">
            <div className="channel__headerLeft">
                <h4 className="channel__channelName">
                    <strong># All Channels</strong>
                    <StarBorderOutlinedIcon/>
              </h4>
         </div>
            <div className="channel__headerRight">
                <p>
                    <InfoOutlinedIcon /> Details
                </p>
            </div>
        </div>
          {channels.map((channel)=>(
                <SidebarOption 
                key={channel.id}
                title={channel.name}
                id={channel.id} />
               
            ))}
        <hr/>
        <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
        <hr/>
        </div>
    )
}

export default Channel
