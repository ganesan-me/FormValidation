import React from 'react'

function Upload(props) {
    return(
        <div id="upload">
            <input type="file" name="upload"  onChange={props.handleUpload} accept=".png, .jpg, .jpeg" style={{border: props.isValid().upload ? '3px solid green' : '3px solid red'}} />
            <p className="errorText" >{props.errors().upload}</p>
        </div>
    )
}

export default Upload