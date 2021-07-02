import React from 'react';
import "../File.css";

function File({url,timestamp,username,userimage }) {
    return (
        <div className="file">
           <div className='fileuserimage'> <img src={userimage} alt=" " /></div>
            <div className="fileinfo">
                <h4>{username} <span className="filetimestamp">{new Date(timestamp?.toDate()).toUTCString()}
                    </span></h4>
                    <p>File Link: <a href={url}>Download file from here </a></p>
            </div>
            {/* <div className='fileimage'><img src={url}/> </div> */}
        </div>

    )
}

export default File