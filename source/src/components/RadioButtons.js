


import React from 'react'

function RadioButtons(props) {
    return(
        <div id="radioButtons">
            <label >  
                <input type="radio" name="locationType" defaultChecked value="offshore" onChange={props.handleRadioButton}  />
                Offshore
            </label>
            <label>  
                <input type="radio" name="locationType"  value="onshore" onChange={props.handleRadioButton} />
                Onshore
            </label>
        </div>
    )
}

export default RadioButtons