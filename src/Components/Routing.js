import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Channel from "./Channel";
import People from "./People";
import Scheduler from "./Scheduler";
import FileUpload from "./FileUpload";
import Home from "./Home";
import Chat from "./Chat"
import Timeline from "./Timeline";
import "../App.css";
import Header from "./Header"
import Sidebar from "./Sidebar"
//import AppCard from "./AppCard"
import Login from "./Login";
import {useStateValue} from "./StateProvider";

function Routing() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="app">
            <React.Fragment>
                <Router>
                    {!user ? (
                        <div>
                        <Home/>
                   
                    </div>
                    ) : (

                    <>
                     <Header />
                    <div className="app__body">
                        <Sidebar />
                        <Switch>
                    
                            <Route path="/File_Browser" component={FileUpload}/>
                            <Route path="/Scheduler" component={Scheduler}/>
                            <Route path="/People&Usergroups" component={People}/>
                            <Route path="/Channel" component={Channel} />
                            <Route exact path="/Timeline" component={Timeline} />
                            {/* <Route path="/Apps" component={AppCard }/> */}
                            <Route path="/:roomId" component={Chat}/> 
                            
                            <Route path="/" component={Home }/>
                            <Route path="/login" component={Login}/>
						
                    </Switch>
                    </div>
                    </>
                    )}
            
                    
                </Router>
            </React.Fragment>

        </div>
    )
}

export default Routing
