import React, { Component } from 'react';
import './PlayerInput.css';

class PlayerInput extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: ""
    }

    this.resetInput = this.resetInput.bind(this);
    this.setFocus = this.setFocus.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    let value = e.target.value;
    this.setState(function(prevState) {
      return {
        inputValue: value
      };
    }, this.props.testInput(value));
  }

  resetInput(){
    this.setState((prevState) => {
      return {
        inputValue: ""
      };
    });
  }

  setFocus(){
    console.log("changing focus");
    this.playerInput.focus();
  }

  render(){
    return(
      <div className="wrapper">
        <div className="timer">
                <svg id="seconds" class="clock" width="300" height="300">
                <circle cx="150" cy="150" r="80" stroke-width="20" />
                </svg>
        </div>


        <input type="text" 
              onChange={ this.handleChange } 
              placeholder="Une idée ?" 
              ref={ (input) => { this.playerInput = input; } }
              disabled={ this.props.canPlay ? false : true} value={ this.state.inputValue } 
              className="PlayerInput" />
        </div>
    )
  }
}

export default PlayerInput;
