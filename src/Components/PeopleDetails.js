import React from 'react'
import '../PeopleDetails.css'
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import { Details } from '@material-ui/icons';
function PeopleDetails({username,userimage,useremail}) {
    return (
        <div className="peopleDetails">
            <div className="left">
                <div>
            <InfoOutlinedIcon /> 
            </div>
            </div>
            <div className="peopleUserImage">
            <div><img src={userimage} alt=" " /></div>
            <div className="peopleUserName">
                <h4> {username}
                 <div className="email">
                    {useremail}
                    </div>
                </h4>
            </div>
        </div>
        </div>
    )
}

export default PeopleDetails