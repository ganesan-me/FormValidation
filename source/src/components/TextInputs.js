import React from 'react'


function TextInputs(props) {
    return(
        <div id="textInputs">
            <input type="text" placeholder="Associate Name" name="associateName"  onChange={props.handleChange} style={{border: props.isValid().associateName ? '3px solid green' : '3px solid red'}} />
            <p className="errorText" >{props.errors().associateName}</p>
            <input type="text" placeholder="Associate id" name="associateId"  onChange={props.handleChange} style={{border: props.isValid().associateId ? '3px solid green' : '3px solid red'}} />
            <p className="errorText" >{props.errors().associateId}</p>
            <input type="text" placeholder="Project ID" name="projectId"  onChange={props.handleChange} style={{border: props.isValid().projectId ? '3px solid green' : '3px solid red'}} />
            <p className="errorText" >{props.errors().projectId}</p>
        </div>
    )
}

export default TextInputs