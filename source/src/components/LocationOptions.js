import React from 'react'

function LocationOptions(props) {
    if(props.locType=="offshore"){
        return(
            <div id="locationSelector"  >
                <select placeholder="Select Location" name="location" onChange={props.handleChange} style={{border: props.isValid().location ? '3px solid green' : '3px solid red'}} >
                    <option defaultValue value="">Select Location</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Bengalore">Bengalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Pune">Pune</option>
                    <option value="Kochi">Kochi</option>
                </select>
                <p className="errorText" >{props.errors().location}</p>
            </div>
        )
    }else{
        return(
            <div id="locationSelector" >
                <select placeholder="Select Location" name="location" onChange={props.handleChange} style={{border: props.isValid().location ? '3px solid green' : '3px solid red'}} >
                    <option defaultValue value="">Select Location</option>
                    <option value="US">US</option>
                    <option value="Non US">Non US</option>
                </select>
                <p className="errorText" >{props.errors().location}</p>
            </div>
        )
    }
    
}

export default LocationOptions