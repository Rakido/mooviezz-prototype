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
  {youtubeId: 'gKozXuNowWk', title: 'la nuit américaine', director: 'françois truffaut'},
  {youtubeId: 'PVb5BfSM4EM', title: 'les choses de la vie', director: 'Claude Sautet'},
  {youtubeId: 'iVY7nD0_5P0', title: 'les valseuses', director: 'Bertrand Blier'},
  {youtubeId: 'JKttaGMM1wI', title: 'Max et les ferrailleurs', director: 'Claude Sautet'},
  {youtubeId: 'JKttaGMM1wI', title: 'la folie des grandeurs', director: 'Gérard Oury'},
  {youtubeId: '4vnS55MI-Vs', title: 'Peau d\âne', director: 'Jacques Demy'},
  {youtubeId: 'KSw7LPpNm1g', title: 'le chat', director: 'Pierre Granier Deferre'},
  {youtubeId: 'NGyD_q7BhBY', title: 'Adieu poulet', director: 'Pierre Granier Deferre'},
  {youtubeId: 'yRvh8Ccg0u0', title: 'Borsalino', director: 'Jacques Deray'},
  {youtubeId: 'GA9R0AlNVmE', title: 'le juge et l\assassin', director: 'Bertrand Tavernier'},
  {youtubeId: 'ujn1N6GWJoU', title: 'le grand blond avec une chaussure noire', director: 'Yves Robert'},
  {youtubeId: 'shMgTQ0ZgTs', title: 'Buffet froid', director: 'Bertrand Blier'},
  {youtubeId: 'bHNcTpgVsqc', title: 'les chiens', director: 'Alain Jessua'},
  {youtubeId: '5LkdPgGA0ek', title: 'Peur sur la ville', director: 'Henri Verneuil'},
  {youtubeId: '9cJogB7byEs', title: 'le casse', director: 'Henri Verneuil'},
  {youtubeId: 'ObmNjYaaW8M', title: 'l\aventure c\est l\aventure', director: 'Claude Lelouch'},
  {youtubeId: 'EoVJSmc6iVo', title: 'l\horloger de saint paul', director: 'Bertrand Tavernier'},
  {youtubeId: 'axAgYk_NSuk', title: 'l\aile ou la cuisse', director: 'Claude Zidi'},
  {youtubeId: 'xWEf3MkdRts', title: 'quelques messieurs trop tranquilles', director: 'Georges Lautner'},
  {youtubeId: 'm9-inNRd26c', title: 'la bonne année', director: 'Claude Lelouch'},
  {youtubeId: 'Mdh1PIuvr6g', title: 'Dernier domicile connu ', director: 'José Giovanni'},
  {youtubeId: 'P7QbCk4IU38', title: 'Série noire', director: 'Alain Corneau'},
  {youtubeId: 'bXjh9_D3KIk', title: 'coup de tête', director: 'Jean Jacques Annaud'},
  {youtubeId: '_JhatXt_-74', title: 'le cercle rouge', director: 'Jean Pierre Melville'},
  {youtubeId: '_pxqtoFIkns', title: 'César et Rosalie', director: 'Claude Sautet'},
  {youtubeId: 'yMiPGJGsKPU', title: 'L\histoire d\Adèle H', director: 'François Truffaut'},
  {youtubeId: 'NUamIp2Mvgk', title: 'Le pistonné', director: 'Claude Berry '},
  {youtubeId: 'NX63vFVsr2o', title: 'Trafic', director: 'Jacques Tati'},
  {youtubeId: '-w8DMoSVXnY', title: 'le grand bazar', director: 'Claude Zidi'},
  {youtubeId: 'FADpEk6_qb0', title: 'la gifle', director: 'Claude Pinoteau'},
  {youtubeId: 'VzPgdRIdygc', title: 'Dites lui que je l\aime', director: 'Claude Miller'},
  {youtubeId: '0jmssd2UGUo', title: 'Le juge Fayard dit le sheriff', director: 'Yves Boisset'},
  {youtubeId: 'oNZSYtJMA00', title: 'On aura tout vu', director: 'Georges Lautner'},
  {youtubeId: 'OK6W0szX7zM', title: 'le jouet', director: 'Francis Veber'},
  {youtubeId: 'T-rjbPSxJA0', title: 'Barocco', director: 'André Téchiné'},
  {youtubeId: 'rbsCIkLkfXw', title: 'l\argent de poche', director: 'François Truffaut'},
  {youtubeId: 'rPb1qrx6aMM', title: 'la carapate', director: 'Gérard Oury'},
  {youtubeId: '6PVAO4hqENg', title: 'La dentellière', director: 'Claude Goretta'},
  {youtubeId: 'BSZioe8c7vs', title: 'les galettes de Pont Aven', director: 'Joel Séria'},
  {youtubeId: 'HNj5EZw93lc', title: 'Nous ne vieillirons pas ensemble', director: 'Maurice Pialat'},
  {youtubeId: 'jtdwIJQbQ-4', title: 'le souffle au coeur', director: 'Louis Malle'},
  {youtubeId: 'TpcDH0BVUAk', title: 'les mariés de l\an II', director: 'Jean Paul Rappeneau'},
  {youtubeId: 'KXm4spMeXJk', title: 'Raphael ou le débauché', director: 'Michel Deville'},
  {youtubeId: 'L-u85i26D6U', title: 'les deux anglaises et le continent', director: 'François Truffaut'},
  {youtubeId: 'FDl6gn_Iq44', title: 'l\étalon', director: 'Jean Pierre Mocky'},
  {youtubeId: 'pCX5d9JK6fE', title: 'l\ours et la poupée', director: 'Michel Deville'},
  {youtubeId: 'S5AI0pJTLrk', title: 'les assassins de l\ordre', director: 'Marcel Carné'},
  {youtubeId: 'FEhlINrV8ws', title: 'Docteur Popaul', director: 'Claude Chabrol'},
  {youtubeId: '_aX1ocu-kaU', title: 'la femme en bleu', director: 'Michel Deville'},
  {youtubeId: 'wlW1JW5r6GM', title: 'L\animal', director: 'Claude Zidi',}
];

const TIMER = 30;
const TIMER_STEP = 100;

class FRSeventies extends Component {
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

export default FRSeventies;

// style={'background-color': 'white'; height: 10px; width: 700px; position: absolute; bottom: 40px; left: 40px;"