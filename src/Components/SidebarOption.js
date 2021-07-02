import React from 'react'
import "../SidebarOption.css";
import {useHistory} from "react-router-dom";
import db from "../firebase";

function SidebarOption({Icon, title, id, addChannelOption}) {

    const history =useHistory();

    const selectChannel =() => {
        if (id) {
            history.push(`${id}`)
        } else{ 
            history.push(title);

        }
    };

    const addChannel=()=> {
        const channelName = prompt('please enter the channel name')

        if (channelName){
            db.collection('rooms').add({
                name: channelName,
            })
        }
    };

    return (
        <div className="sidebarOption"
         onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOptionicon" />}
            {Icon? ( 
            <h3>{title}</h3>) : (<h3 className="sidebarOptionchannel">
                 <span className="sidebarOption__hash"> # </span> {title}</h3>) }
        </div>
    );
}

export default SidebarOption;