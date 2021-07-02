import React,{useState, useEffect} from 'react';
import "../Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import AppsIcon from "@material-ui/icons/Apps";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption.js";
import db from "../firebase.js"
import {useStateValue} from "./StateProvider";
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import CalendarTodayTwoToneIcon from '@material-ui/icons/CalendarTodayTwoTone';
function Sidebar() {


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
        <div className="sidebar" >
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Team Task</h2>
                    <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                    </h3>
                </div>
            <CreateIcon/>

            </div>
            <SidebarOption Icon={AccessAlarmIcon } title="Timeline" /> 
            <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
            {/* <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/> */}
            <SidebarOption Icon={CalendarTodayTwoToneIcon} title="Scheduler"/>
            <SidebarOption Icon={DraftsIcon} title="Saved Items"/>
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel"/>
            <SidebarOption Icon={PeopleAltIcon} title="People&Usergroups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File_Browser"/>
            {/* <SidebarOption Icon={ExpandLessIcon} title="Show Less"/> */}
            <hr/>
            <SidebarOption Icon={ExpandMoreIcon} title="All Channels"/>
            <hr/>
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
            {channels.map((channel)=>(
                <SidebarOption 
                key={channel.id}
                title={channel.name}
                id={channel.id} />
            ))}
        </div>
    )
}

export default Sidebar