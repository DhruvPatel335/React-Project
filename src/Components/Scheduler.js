import React,{useState,useEffect,Component} from 'react';
import {DayPilot, DayPilotScheduler} from "daypilot-pro-react";
import Zoom from "./Zoom";
import "../Scheduler.css"
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined"
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined"
import PeopleDetails from"./PeopleDetails";
import db from "../firebase";
import "../Chat.css"
class Scheduler extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            startDate: "2021-10-01",
            days: 31,
            scale: "Day",
            timeHeaders: [
                { groupBy: "Month"},
                { groupBy: "Day", format: "d"}
            ],
            cellWidthSpec: "Auto",
            cellWidth: 50,
            resources:[
                {name: "Member 1", id: "A"},
                {name: "Member 2", id: "B"},
                {name: "Member 3", id: "C"},
                {name: "Member 4", id: "D"},
                {name: "Member 5", id: "E"},
                {name: "Member 6", id: "F"},
                {name: "Member 7", id: "G"}
            ],
            
            events: [
                {id: 1, text: "Deadline 1", start: "2021-10-02T00:00:00", end: "2021-10-05T00:00:00", resource: "A" },
                {id: 2, text: "Inspection", start: "2021-10-03T00:00:00", end: "2021-10-10T00:00:00", resource: "C", barColor: "#38761d", barBackColor: "#93c47d" },
                {id: 3, text: "Deadline 3", start: "2021-10-02T00:00:00", end: "2021-10-08T00:00:00", resource: "D", barColor: "#f1c232", barBackColor: "#f1c232" },
                {id: 4, text: "Presentation week", start: "2021-10-02T00:00:00", end: "2021-10-08T00:00:00", resource: "E", barColor: "#cc0000", barBackColor: "#ea9999" }
            ]
        };
    }

    zoomChange(args) {
        switch (args.level) {
            case "month":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfMonth(),
                    days: DayPilot.Date.today().daysInMonth(),
                    scale: "Day"
                });
                break;
            case "week":
                this.setState({
                    startDate: DayPilot.Date.today().firstDayOfWeek(),
                    days: 7,
                    scale: "Day"
                });
                break;
            default:
                throw new Error("Invalid zoom level");
        }
    }

    cellWidthChange(ev) {
        const checked = ev.target.checked;
        this.setState({
            cellWidthSpec: checked ? "Auto" : "Fixed"
        });
    }

    render() {
        const {...config} = this.state;
        return (
            <div className="chat">  
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong># Schedule</strong>
                        <StarBorderOutlinedIcon/>
                  </h4>
             </div>
                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="Scheduler">

                <div className="toolbar">
                    <Zoom onChange={args => this.zoomChange(args)} />
                    <span className="toolbar-item"><label><input type="checkbox" checked={this.state.cellWidthSpec === "Auto"} onChange={ev => this.cellWidthChange(ev)} /> Auto width</label></span>
                </div>

                <DayPilotScheduler
                  {...config}
                  onEventMoved={args => {
                      console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
                      this.scheduler.message("Event moved: " + args.e.data.text);
                  }}
                  onEventResized={args => {
                      console.log("Event resized: ", args.e.data.id, args.newStart, args.newEnd);
                      this.scheduler.message("Event resized: " + args.e.data.text);
                  }}
                  onTimeRangeSelected={args => {
                    DayPilot.Modal.prompt("New event name", "Event").then(modal => {
                      this.scheduler.clearSelection();
                      if (!modal.result) {
                        return;
                      }
                      this.scheduler.events.add({
                        id: DayPilot.guid(),
                        text: modal.result,
                        start: args.start,
                        end: args.end,
                        resource: args.resource
                      });
                    });
                  }}
                  ref={component => { this.scheduler = component && component.control; }}
                />
            </div>
            </div>
        );
    }
}

export default Scheduler;