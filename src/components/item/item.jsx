import React from "react";
import iconEllipsis from '../../images/icon-ellipsis.svg'
import './item.css';

const Item = (props)=>{
    return(
        <div className="trackerItem">
            <div className='trackerInfo'>
                <div className="header">
                <span className="title">{props.title}</span>
                <img src={iconEllipsis} alt="settings"/>
                </div>
                <div className="body">
                    <span className="hours">{props.hours}</span>
                    <span className="prevLog">{props.prevLog}</span>
                </div>
            </div>
        </div>

    )

}

export default Item;