import React from "react";

import "./hemisphere.css"
import profile1 from "./images/black diamond.jpg"
import profile3 from "./images/SP4945(WG)-M_WG_0.jpg"

const hemisphereConfig = {
    Northern : {
        text : 'You are in Northern Hemisphere',
        picture : profile1
    },
    Southern : {
        text : 'You are in Southern Hemisphere',
        picture : profile3

    }
}

const HemisphereDisplay = ({ latitude }) => { 
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    // const picture = latitude > 0 ? profile1 : profile3;
    const { text , picture } = hemisphereConfig[hemisphere]
    return (
        <div className={hemisphere}>
            <div className="ui raised text container segment">
                <div className="image">
            <img src={picture} alt="pic" height="100" width="100" />
                </div>
                <div className="ui teal bottom attached label">
           <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default HemisphereDisplay;