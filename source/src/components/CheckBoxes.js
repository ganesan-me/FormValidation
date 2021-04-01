import React, { Component } from 'react'

class CheckBoxes extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="skills" style={{border: this.props.isValid().skills ? '3px solid green' : '3px solid red'}} >
                <label>
                    <input type="checkbox" name="skill1" value="HTML5,CSS3,JS" onClick={this.props.handleSkills} />
                    HTML5,CSS3,JS
                </label>
                <label>
                    <input type="checkbox" name="skill2" value="Angular 8" onClick={this.props.handleSkills} />
                    Angular 8
                </label>
                <label>
                    <input type="checkbox" name="skill3" value="Express JS" onClick={this.props.handleSkills} />
                    Express JS
                </label>
                <label>
                    <input type="checkbox" name="skill4" value="SASS" onClick={this.props.handleSkills} />
                    SASS
                </label>
                <label>
                    <input type="checkbox" name="skill5" value="React JS" onClick={this.props.handleSkills} />
                    React JS
                </label>
                <label>
                    <input type="checkbox" name="skill6" value="Node JS" onClick={this.props.handleSkills} />
                    Node JS
                </label>
                <label>
                    <input type="checkbox" name="skill7" value="ES5,ES6,ES7..." onClick={this.props.handleSkills} />
                    ES5,ES6,ES7...
                </label>
                <label>
                    <input type="checkbox" name="skill8" value="Veu JS" onClick={this.props.handleSkills} />
                    Veu JS
                </label>
                <label>
                    <input type="checkbox" name="skill9" value="Mongo DB" onClick={this.props.handleSkills} />
                    Mongo DB
                </label>
                <label>
                    <input type="checkbox" name="skill10" value="Bootstrap 4" onClick={this.props.handleSkills} />
                    Bootstrap 4
                </label>
                <label>
                    <input type="checkbox" name="skill11" value="TypeScript" onClick={this.props.handleSkills} />
                    TypeScript
                </label>
                <p className="errorText" >{this.props.errors().skills}</p>
            </div>
            
        )
    }
}

export default CheckBoxes