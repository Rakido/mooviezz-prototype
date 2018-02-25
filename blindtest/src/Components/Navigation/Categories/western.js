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
{youtubeId: 'f9xTuNbD2sI', title: 'Le bon la brute et le truand', director: 'Sergio Leone'},
{youtubeId: 'PHbVlvqTjc8', title: 'Il était une fois dans l\Ouest', director: 'Sergio Leone'},
{youtubeId: 'Y3BuVqmMErA', title: 'Danse avec les loups', director: 'Kevin Costner'},
{youtubeId: 'S_yTkiStLD8', title: 'Il était une fois la révolution', director: 'Sergio Leone'},
{youtubeId: 'Jhj6N4jNq54', title: 'Mon nom est Personne', director: 'Tonino Valerii'},
{youtubeId: 'KZ9DABnczdo', title: 'On l\appelle Trinita', director: 'Enzo Barboni'},
{youtubeId: 'mKX-aYnp4qE', title: 'On continue à l\appeler Trinita', director: 'Enzo Barboni'},
{youtubeId: '95ND_fwX2fM', title: 'Jeremah Johnson', director: 'Sydney Pollack'},
{youtubeId: 'l54mgAt85eA', title: 'La flèche brisée', director: 'Delmer Daves'},
{youtubeId: 'Z-SWxVYzRCU', title: 'L\'homme qui tua Liberty Valance', director: 'John Ford'},
{youtubeId: 'gPEYUC5PlGc', title: 'Rio Bravo', director: 'Howard Hawks'},
{youtubeId: '7Se44Mb2F7w', title: 'Les 7 mercenaires', director: 'Antoine Fuqua'},
{youtubeId: 'i91h94LTCrk', title: 'Le train sifflera 3 fois', director: 'Fred Zinnemann'},
{youtubeId: 'Ha4sY1xxxG0', title: 'Pour un poignée de dollars', director: 'Sergio Leone'},
{youtubeId: 'fV8_jtBTONE', title: 'Impitoyable', director: 'Clint Eastwood'},
{youtubeId: '47J8oIsW188', title: 'Django unchained', director: 'Quentin Tarantino'},
{youtubeId: '5OoZV3fu99M', title: 'La porte du paradis', director: 'Michael Cimino'},
{youtubeId: 'wOuSUyZmJEM', title: 'La rivière rouge', director: 'Howard Hawks et Arthur Rosson'},
{youtubeId: 'Wc5JtgKlOH4', title: 'Josey Wales hors la loi', director: 'Clint Eastwood'},
{youtubeId: 'w_V2E7THM0', title: 'Sitting Bull', director: 'Sidney Salkow et René Cardona'},


];

const TIMER = 30;
const TIMER_STEP = 100;

class Western extends Component {
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
      score: 0
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
        return {hasWon: true, score: prevState.score + 1};
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
        <SubBarSite />
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
                { (this.state.timeRemaining >= 0 ) ? Math.round(this.state.timeRemaining * 10).toFixed(2) / 10 : 0 }
              </div>
            </div>
          </div>
        </div>
        <Result hasWon={ this.state.hasWon } shown={ this.state.hasMessageToShow } playAgainAction={ this.newGame } currentVideo={ this.state.videos[this.state.currentVideoId]} currentScore={ this.state.score } />
      </div>
    );
  }
}

export default Western;

// style={'background-color': 'white'; height: 10px; width: 700px; position: absolute; bottom: 40px; left: 40px;"