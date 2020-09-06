import React, { useState } from 'react';

const Comments = (props) => {
    const commetStyle ={
        border: '1px solid green',
        padding: '20px',
        
        textAlign:'center',
        width:'400px',
        margin:'0 auto',
        fontSize:'20px',
        marginBottom:'20px',
    } 
    const imageStyle = {
        height: "50px", width: "50px", borderRadius: "50%"
    }
    return (
        <div style={commetStyle}> 
            <h4><img style={imageStyle} src={`https://loremflickr.com/600/400?random=${Math.random() * 100}`} alt="" /> {props.comment.name}</h4>

            <p>{props.comment.body}</p>
        </div>
    );
};

export default Comments;