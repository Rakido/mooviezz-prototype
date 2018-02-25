import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Result.css';

class Result extends Component {

  render(){
    var shown = this.props.shown ? 'shown' : '';
    return(
      <div className={'result-box ' + shown}>
        <div className="wrapper">
          <div className="title">
          <h1> { this.props.currentVideo.title } </h1>
          </div>
          <div className="director">
          <h2> Directed by { this.props.currentVideo.director }</h2>
          </div>
          <div className = "score">
          <p>Your score is { this.props.currentScore }</p>
          </div>
         
          <Button className="playAgain" type="button" onClick={this.props.playAgainAction}> Prochain extrait </Button>
        </div>
      </div>
    )
  }
}

export default Result;


// <h1 style={ this.props.hasWon ? {'color': 'green'} : {'color': 'red'} }>{this.props.hasWon ? 'You win !' : 'You lose !'}</h1>