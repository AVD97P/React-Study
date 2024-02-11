import React from "react";

import profile1 from "./images/black diamond.jpg"
const SingleComment = (props) => {
    return (
        <div className="comment">
        <a href="/" className="avatar">
            <img src={ props.img} alt="profile picture" />
        </a>
        <div className="content">
            <a src={props.img} href="/" className="author">
                { props.name}
            </a>
            <div className="metadata">
                <span style={{backgroundColor: 'gray',color:'white',padding:'5px'}}>
                { props.date}
                </span>
            </div>
            <div className="text">
            { props.text}
            </div>
        </div>
    </div>
    )
}

export default SingleComment;