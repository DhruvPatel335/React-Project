// import React from 'react';
// import '../TimelineMessage.css';

// function TimelineMessage({message,timestamp,username,userimage }) {
//     return (
//         <div className="timelineMessage">
//             <img src={userimage} alt=" " />
//             <div className="timelineMessage__info">
//                 <h4>{username} <span className="timelineMessage__timestamp">{new Date(timestamp?.toDate()).toUTCString()}
//                     </span></h4>
//                    <hr/>
//                 <div className="timelineMessage__para"><p>{message}</p></div>
//             </div>
            
            
//         </div>
//     )
// }

// export default TimelineMessage;

import React from 'react';
import '../TimelineMessage.css';

function TimelineMessage({message,timestamp,username,userimage }) {
    return (
        <div className="timeline-item">
            
            <div className="timeline-item-content">
            <div className='tag'> 
            <div>{username} </div>
            <div className='image'><img src={userimage} alt=" " /> </div>
            </div>
            
                <time className="timelineMessage__timestamp">{new Date(timestamp?.toDate()).toUTCString()}
                    </time>
                <p>{message}</p>
                <span className='circle' />
            </div>
        </div>
    )
}

export default TimelineMessage;
