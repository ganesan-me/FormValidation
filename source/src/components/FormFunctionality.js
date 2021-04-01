import React, { Component } from 'react'

class FormFunctionality extends React.Component{
    constructor(props){
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSkills = this.handleSkills.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
        this.FormValidator = this.FormValidator.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleRadioButton = this.handleRadioButton.bind(this)

        this.state = {
            associateName: '',
            associateId: '',
            projectId: '',
            locationType: "offshore",
            location: '',
            skillCount: 0,
            comment: '',
            upload: '',
            isFormValid: '',
            isValid: {associateName: false,associateId: false, projectId: false, location: false, skills: false, upload: false, comment: false },
            errors: {
                associateName: 'Please enter the Associate Name.',
                associateId: 'Please enter the Associate id.',
                projectId: 'Please enter the Project id.',
                location: 'Please select the location.',
                skills: 'Please select Min 5 skills.',
                upload: 'Please upload Profile Picture',
                comment: 'Please Enter Comments'
            }
        }
        this.baseState = this.state
    }


    FormValidator(e) {
        if(e.target.name === 'associateName') {
            var errorMsg
            var val = e.target.value
            var accepted = !Boolean(val.match(/[^A-Za-z\s]/)) && val.length>=5 && val.length<=30;
            if(val==""){
                errorMsg="Please enter the Associate Name."
            }else if(!accepted){
                errorMsg="Accepts Alphabets, space & Min 5  to Max 30 Char"
            }
            this.setState({ isValid: {...this.state.isValid, associateName: accepted} })
            this.setState({ errors: {...this.state.errors, associateName: errorMsg} })
        }
        else if(e.target.name === 'associateId') {
                var errorMsg
                var val = e.target.value
                var accepted = !Boolean(val.match(/[^0-9]/)) && val.length==6 ;
                if(val==""){
                    errorMsg="Please enter the Associate id."
                }else if(!accepted){
                    errorMsg="Invalid Associate Id"
                }
                this.setState({ isValid : {...this.state.isValid, associateId: accepted} })
                this.setState({ errors : {...this.state.errors, associateId: errorMsg} })
            }
        else if(e.target.name === 'projectId') {
                var errorMsg
                var val = e.target.value
                var accepted = !Boolean(val.match(/[^A-Za-z0-9]/)) && val.length==12 ;
                if(val==""){
                    errorMsg="Please enter the Project id."
                }else if(!accepted){
                    errorMsg="Invalid Project Id"
                }
                this.setState( {isValid : {...this.state.isValid, projectId: accepted} } )
                this.setState( {errors : {...this.state.errors, projectId: errorMsg} } )
        }
        else if(e.target.name === 'location') {
                var errorMsg
                var val = e.target.value
                var accepted = Boolean(val)
                if(!accepted){
                    errorMsg = "Please select the location."
                }
                this.setState( {isValid : {...this.state.isValid, location: accepted} } )
                this.setState( {errors : {...this.state.errors, location: errorMsg} } )
        }
        else if(e.target.type === 'checkbox') {
                var errorMsg
                var len = document.querySelectorAll('input[type="checkbox"]:checked').length
                var accepted = len >= 5
                if(!accepted){
                    errorMsg = "Please select Min 5 skills."
                }
                this.setState( {isValid : {...this.state.isValid, skills: accepted} } )   
                this.setState( {errors : {...this.state.errors, skills: errorMsg} } )   
        }
        else if(e.target.name === 'upload') {
                var errorMsg
                var val = e.target.value
                var accepted = Boolean(val)
                if(!accepted) {
                    errorMsg = "Please upload Profile Picture"
                }
                this.setState( {isValid : {...this.state.isValid, upload: accepted} } )
                this.setState( {errors : {...this.state.errors, upload: errorMsg} } )
        }
        else if(e.target.name === 'comment') {
                var errorMsg
                var val = e.target.value
                var accepted = Boolean(val)
                if(!accepted){
                    errorMsg = "Please Enter Comments"
                }
                this.setState( {isValid : {...this.state.isValid, comment: accepted} } )
                this.setState( {errors : {...this.state.errors, comment: errorMsg} } )
        }
        else if(e.target.name === 'submitForm') {
                var val = this.state.isValid;
                var accepted = val.associateName && val.associateId && val.projectId  && val.location && val.skills && val.upload && val.comment
                this.setState( {isFormValid: accepted} )

        }
        if(true) {
            setTimeout(() => {
                var val = this.state.isValid;
                var accepted = val.associateName && val.associateId && val.projectId  && val.location && val.skills && val.upload && val.comment
                this.setState( {isFormValid: accepted} )
                if(accepted){
                    document.querySelector("#submit").style.backgroundColor = "dodgerblue"
                    document.querySelector("#submit").removeAttribute('disabled')
                } else{
                    document.querySelector("#submit").style.backgroundColor = "grey"
                    document.querySelector("#submit").setAttribute('disabled', 'disabled')
                }
            }, 10);
        }
    }
    
    
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        this.FormValidator(e);
    }
    handleSkills(e) {
        var len = document.querySelectorAll('input[type="checkbox"]:checked').length
        this.setState({skillCount: len})
        this.FormValidator(e);
    }
    handleUpload(e) {
        this.setState({ [e.target.name]: e.target.value })
        this.FormValidator(e);
    }
   
    handleReset(e)  {
        this.setState(this.baseState)
        this.FormValidator(e);
    }
    handleRadioButton(e) {
        this.setState({[e.target.name]: e.target.value})
        this.setState({location: ""})
        document.querySelector("#locationSelector select").selectedIndex = 0
        this.FormValidator(e);
        var errorMsg
        var val = ""
        var accepted = Boolean(val)
        if(!accepted){
            errorMsg = "Please select the location."
        }
        this.setState( {isValid : {...this.state.isValid, location: accepted} } )
        this.setState( {errors : {...this.state.errors, location: errorMsg} } )

    }
    handleSubmit(e)  {
        e.preventDefault()
        this.FormValidator(e);
        setTimeout(() => {
            if(this.state.isFormValid){
                alert("Form Submitted Successfully!")
            }
        }, 10);
    }


}

export default FormFunctionality