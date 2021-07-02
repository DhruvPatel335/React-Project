import React from 'react'
import '../Header.css'
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/Help";
import {useStateValue} from './StateProvider';
function Header() {
    const [{user}]=useStateValue();
    return (
        <div className="header">
            <div className="headerleft">
            <Avatar className="headeravatar" alt={user?.displayName} src={user?.photoURL}
                />
            <AccessTimeIcon />
            </div>
            <div className="headersearch">
                <SearchIcon/>
                <input placeholder="Search your Teammates or channels" />
            </div>
            <div className="headerright">
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header