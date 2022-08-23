import React from "react";
import UserInfo from "./components/userinfo/userInfo";
import Time from "./components/time/time";


const TimeTracker = ()=>{
    return(
        <div className="timeTracker">
            <div className="timeList">
            <UserInfo />
            <Time />
               
                 <div className="time"></div>
            </div>
            <div className="tracker">

            </div>
        </div>
    );

}

export default TimeTracker;