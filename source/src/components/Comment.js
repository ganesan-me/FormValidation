import React from 'react'

function Comment(props) {
    return(
        <div id="comment">
            <textarea placeholder="Comments"  name="comment" onChange={props.handleChange} style={{border: props.isValid().comment ? '3px solid green' : '3px solid red'}} ></textarea>
            <p className="errorText" >{props.errors().comment}</p>
        </div>    
    )
}

export default Comment