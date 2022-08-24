import React from "react";
import userImg from '../../images/avatar.png';
import './userInfo.css'


const UserInfo = ()=>{
    return(
     <div className="userInfo">
         <img src={userImg} alt="Curtis Brumfield" />
         <h4>Report for</h4><br/>
         <h1>Curtis Brumfield </h1>
     </div>
    );
}

export default UserInfo;