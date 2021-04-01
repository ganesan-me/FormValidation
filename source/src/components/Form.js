import React, { Component } from 'react'
import LocationOptions from './LocationOptions'
import CheckBoxes from './CheckBoxes'
import TextInputs from './TextInputs'
import RadioButtons from './RadioButtons'
import Upload from './Upload'
import Comment from './Comment'
import FormButtons from './FormButtons'
import FormFunctionality from './FormFunctionality'

class Form extends (React.Component, FormFunctionality){
    constructor(props){
        super(props)
    }


    render() {
        return (
            <form name="submitForm" onSubmit={this.handleSubmit}>
                <TextInputs handleChange={this.handleChange} errors={()=>this.state.errors} isValid={()=>this.state.isValid} />
                <RadioButtons handleRadioButton = {this.handleRadioButton} />
                <LocationOptions locType = {this.state.locationType}  handleChange = {this.handleChange} errors={()=>this.state.errors} isValid={()=>this.state.isValid} />
                <CheckBoxes handleSkills = {this.handleSkills} errors={()=>this.state.errors} isValid={()=>this.state.isValid} />                    
                <Upload handleUpload = {this.handleUpload} errors={()=>this.state.errors} isValid={()=>this.state.isValid} />              
                <Comment handleChange = {this.handleChange} errors={()=>this.state.errors} isValid={()=>this.state.isValid} />
                <FormButtons handleReset = {this.handleReset} isFormValid = {()=>this.state.isFormValid} />
            </form>
        )
    }
}

export default Form