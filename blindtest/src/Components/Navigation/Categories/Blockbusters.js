import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Youtube from 'react-youtube';

import simplifyString from './simplifyString';

import PlayerInput from './PlayerInput';
import Result from './Result';

import TopBarSite from '../NavBar/TopBarSite';
import SubBarSite from '../NavBar/SubBarSite';

// Importer le CSS //


const videos = [
  {youtubeId: 'zuCjHXLHGUk', title: 'Tron Legacy', director: 'Joseph Kosinski'},
  {youtubeId: 'a3lcGnMhvsA', title: 'Interstellar', director: 'Christopher Nolan'},
  {youtubeId: 'KE08pz1soog', title: 'The Dark Knight', director: 'Christopher Nolan'},
  {youtubeId: 'rCZ3SN65kIs', title: 'Le Seigneur des Anneaux : Le Retour du roi', director: 'Peter Jackson'},
  {youtubeId: 'dnRxQ3dcaQk', title: 'Jurassic Park', director: 'Steven Spielberg'},
  {youtubeId: 'z7GSgWzmR_-', title: 'Matrix', director: 'Lana et Lily Wachowskii'},
  {youtubeId: 'udKE1ksKWDE', title: 'Avengers', director: 'Joss Whedoni'},
  {youtubeId: '9UjqWSAF7uE', title: 'Terminator', director: 'James Cameroni'},
  {youtubeId: 'fjWxTbVI0cw', title: 'Star Wars L\'empire contre-attaque', director: 'Irvin Kershner'},
  {youtubeId: 'TAbbJT0ZXmk', title: 'Inception', director: 'Christopher Nolan'},
  {youtubeId: '_8CP1tT8tdk', title: 'Retour vers le futur', director: 'Robert Zemeckis'},
  {youtubeId: 'a3lcGnMhvsA', title: 'Interstellar', director: 'Christopher Nolan'},
  {youtubeId: '7YyBtMxZgQs', title: 'Les Aventuriers de l\'arche perdue', director: 'Steven Spielberg'},
  {youtubeId: '2t5p4UNDZK8', title: 'Pacific Rim', director: 'Guillermo del Toro '},
  {youtubeId: '5Z0wEVxL30Q', title: 'Skyfall', director: 'Sam Mendesi'},
  {youtubeId: '4lmrmx3cpWU', title: 'Avatar', director: 'James Cameron'},
  {youtubeId: 'uQQZR-Skftk', title: 'Gladiator', director: 'Ridley Scott'},
  {youtubeId: 'iO9mbAhFgq8', title: 'Die Hard Piège de Cristal', director: 'John McTiernan'},
  {youtubeId: '1YGfrGKK9Mo', title: 'Titanic', director: 'James Cameron'}
];

const TIMER = 30;
const TIMER_STEP = 100;

class Blockbuster extends Component {
  constructor(props){
    super(props);

    this.state = {
      interval: null,
      timeRemaining: TIMER,
      videos: videos,
      currentVideoId: 1,
      canPlay: false,
      hasMessageToShow: false,
      hasWon: false,
      score: 0,
      extrait: 1,
    };

    this.getNextVideoId = this.getNextVideoId.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.endGame = this.endGame.bind(this);
    this.startGame = this.startGame.bind(this);
    this.newGame = this.newGame.bind(this);
    this.testInput = this.testInput.bind(this);
    this.advanceTimer = this.advanceTimer.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyboard, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyboard, false);
  }

  getNextVideoId(){

    let ret = Math.floor(Math.random() * videos.length) ;

    return ret;

  }

  resetGame(){
    this.setState((prevState) => {
      return {
        canPlay: false,
        timeRemaining: TIMER,
        hasMessageToShow: false,
        hasWon: false
      };
    });

    this.playerInput.resetInput();
    this.playerInput.setFocus();
  }

  startGame(){
    var interval = setInterval( this.advanceTimer, TIMER_STEP);
    this.setState({interval: interval, canPlay: true})
  }

  clearCounterInterval(){
    clearInterval(this.state.interval);
  }

  advanceTimer(){
    this.setState((prevState) => {
      return {
        timeRemaining: prevState.timeRemaining - (TIMER_STEP / 1000)
      };
    });
    if ( this.state.timeRemaining <= 0 ){
      this.setState((prevState) => {
        return {score: prevState.score - 1};
      });
      this.endGame();
    }
  }

  endGame(){
    this.setState((prevState) => {
      return {
        canPlay: false,
        hasMessageToShow: true

      };
    });

    this.clearCounterInterval();
  }

  newGame(){

    this.resetGame();
    this.setState((prevState) => {
      return {
        currentVideoId: this.getNextVideoId()
      };
    }, this.startGame);
  }

  testInput(value){
    if ( simplifyString(value) === simplifyString(this.state.videos[this.state.currentVideoId].title) || simplifyString(value) === simplifyString(this.state.videos[this.state.currentVideoId].director) ) {
      this.setState((prevState) => {
        return {hasWon: true, score: prevState.score + 1, extrait: prevState.extrait+ 1 };
      });
      this.endGame();
    }
  }

  handleKeyboard(e){
    if(e.which === 13 && !this.state.canPlay ) {
        this.newGame();
    }
  }

  render() {
    const opts = {
      height: window.innerHeight,
      width: window.innerWidth,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel : 0,
        fs : 0,
        modestbranding: 1,
        showinfo: 0
      }
    };

    return (
      <div>
        <TopBarSite />
        <SubBarSite name="Blockbuster" score={this.state.score} extrait={this.state.extrait}/>
        <div className="GameBoard">

          <div className="wrapper">


            <div className="Placeholder">

            </div>
            <Youtube videoId={ this.state.videos[this.state.currentVideoId].youtubeId } opts={opts} onReady={this.startGame} />
            <PlayerInput testInput={ this.testInput } canPlay={this.state.canPlay } ref={ instance => { this.playerInput = instance; } }  />
            <div>
              <div class="ProgressBar">
                <div class="Progress"></div>
              </div>
            </div>
            <div className="Overlay">
              <div className="Timer">
                { (this.state.timeRemaining >= 0 ) ? Math.floor(Math.round(this.state.timeRemaining * 10).toFixed(2) / 10) : 0 }
              </div>
            </div>
          </div>
        </div>
        <Result hasWon={ this.state.hasWon } shown={ this.state.hasMessageToShow } playAgainAction={ this.newGame } currentVideo={ this.state.videos[this.state.currentVideoId]} currentScore={ this.state.score } />
      </div>
    );
  }
}

export default Blockbuster;

// style={'background-color': 'white'; height: 10px; width: 700px; position: absolute; bottom: 40px; left: 40px;"
