import React from "react";
import TimeLineItem from "./timelineitem";
import Timelines from "../data/timelines";

function Timeline(){
    return(
        <div className="timeline-box">
            {Timelines.map((timeline) => (
                <TimeLineItem
                    name = {timeline.Name}
                    year = {timeline.Year}
                    description = {timeline.Description}
                    enddate = {timeline.EndDate}
                    key = {Math.ceil(Math.random() * 1000)}
                ></TimeLineItem>
            ))}
        </div>
    )
}

export default Timeline