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
  {youtubeId: 'fE_vaCAvYUs', title: 'Le voleur de bicyclette', director: 'Vittorio De Sica'},
{youtubeId: 'CekfeQc_S00', title: 'Affreux, sales et méchants', director: 'Ettore Scola'},
{youtubeId: 'SKl7nqazsFQ', title: 'Le pigeon', director: 'Mario Monicelli'},
{youtubeId: 'KMlK3PM85qs', title: 'La vie est belle', director: 'Roberto Begnini'},
{youtubeId: 'WRItHtpZ01o', title: 'La strada', director: 'Federico Fellini'},
{youtubeId: '4OnGol57daE', title: 'Une journée particulière', director: 'Ettore Scola'},
{youtubeId: 'The8Xi6fKOE', title: 'La dolce vita', director: 'Federico Fellini'},
{youtubeId: 'jWZBu-Tn5oQ', title: 'Parfum de femme', director: 'Dino Risi'},
{youtubeId: 'EXANiMJ9F3Y', title: 'Rome ville ouverte', director: 'Roberto Rossellini'},
{youtubeId: 'pkiGmx19vrg', title: 'Rocco et ses frères  ', director: 'Luchino Visconti'},
{youtubeId: 'gA-apePI03o', title: 'Stromboli', director: 'Roberto Rossellini'},
{youtubeId: 'eIHrAErHYc0', title: 'Pain amour et fantaisie', director: 'Luigi Comencini'},
{youtubeId: 'j00cJ3AL2b8', title: 'Il était une fois dans l\ouest', director: 'Sergio Leone'},
{youtubeId: 'F8I74Txb7mc', title: 'Le fanfaron', director: 'Dino Risi'},
{youtubeId: 'xQaidV5nGxY', title: 'Pour une poignée de dollards', director: 'Sergio Leone'},
{youtubeId: 'H33cynYO2GQ', title: 'Mort à Venise', director: 'Luscino Visconti'},
{youtubeId: 'uA64nzcJ7dU', title: 'Riz amer', director: 'Giuseppe De Santis'},
{youtubeId: 'SOBnCMsBnt4', title: 'Le jardin des Finzi-Contini', director: 'Vittorio De Sica'},
{youtubeId: 'NmVS696VQlo', title: 'Umberto D', director: 'Vittorio De Sica'},
{youtubeId: 'BWNVVV75TbQ', title: 'Enquête sur un citoyen au-dessus de tout soupçon', director: 'Elio Petri'},
{youtubeId: 'qHhjhtdmTR0', title: 'la grande bouffe', director: 'Marco Ferreri'},
{youtubeId: 'ofm5JTQUmh4', title: 'Le bal', director: 'Ettore Scola'},
{youtubeId: '3h_-6zX7t5c', title: 'les damnés', director: 'Luchino Visconti'},
{youtubeId: 'oRsjbfVH9nE', title: 'Allemagne année zéro', director: 'Roberto Rosselini'},
{youtubeId: 'u0rqhdx1154', title: 'les nuits de Cabiria', director: 'Federico Fellini'},
{youtubeId: 'gjPQfw1Yaw4', title: 'l\avventura', director: 'Michelangelo Antonioni'},
{youtubeId: 'TEegiZNBAEc', title: 'la nuit', director: 'Michelangelo Antonioni'},
{youtubeId: 'CcJRM9gPacA', title: 'L\éclisse', director: 'Michelangelo Antonioni'},
{youtubeId: 'XaKZv_tCG50', title: 'Miracle à Milan ', director: 'Vittoria de Sica'},
{youtubeId: 'wSzzIecxGMQ', title: 'L\or de Naples', director: 'Vittoria de Sica'},
{youtubeId: 'h8SOHxTVA9I', title: 'la fille à la valise', director: 'Valerio Zurlini'},
{youtubeId: '2OpAeV1xscs', title: 'le désert des tartares', director: 'Valerio Zurlini'},
{youtubeId: 'c9TTte9Og8c', title: 'un thé avec Mussolini', director: 'Franco Zeffirelli'},
{youtubeId: 'k8tSqR8DP7I', title: 'le grand embouteillage', director: 'Luigi Comencini'},
{youtubeId: 'ORosf1HwSJU', title: 'Accatone', director: 'ier Paolo Pasolini'},
{youtubeId: 'N4SkQD4rIDg', title: 'le christ s\est arrêté à Eboli', director: 'Francesco Rosi'},
{youtubeId: 'SOBnCMsBnt4', title: 'La grande bellezza', director: 'Paolo Sorrentino'},
{youtubeId: 'NmVS696VQlo', title: 'Huit et demi', director: 'Federico Fellini'},
{youtubeId: 'BWNVVV75TbQ', title: 'Le guepard', director: 'Luchino Visconti'},

];

const TIMER = 30;
const TIMER_STEP = 100;

class italy extends Component {
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

export default italy;

// style={'background-color': 'white'; height: 10px; width: 700px; position: absolute; bottom: 40px; left: 40px;"