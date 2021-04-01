import React from 'react'

function FormButtons(props) {

    
    return(
        <div id="buttons">
            <input type="submit" id="submit" name="submit"  />
            <input type="reset" id="reset" onClick={props.handleReset} />
        </div>
    )
}

export default FormButtons

// disabled={props.isFormValid() ? "" : "disabled"} style={{backgroundColor: props.isFormValid() ? 'dodgerblue' : 'grey'}}