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
{youtubeId: 'l3a2qt9XLho', title: 'L\armée des ombres', director: 'Jean Pierre Melville'},
{youtubeId: 'HpquFSEkUTQ', title: 'La liste de Shindler', director: 'Steven Spielberg'},
{youtubeId: '4Onrd1my2rM', title: 'Stalingrad', director: 'Jean Jacques Annaud'},
{youtubeId: 'u0CKP7OYWaY', title: 'Il faut sauver le soldat Ryan', director: 'Steven Spielberg'},
{youtubeId: 'GGdN8jyJhXc', title: 'Le pianiste', director: 'Roman Polanski'},
{youtubeId: 'PudS6DvgY2A', title: 'La rafle', director: 'Roselyn Bosh'},
{youtubeId: 'EF984MUqcm4', title: 'Pearl Harbour', director: 'Mickael Bay'},
{youtubeId: 'g73HM0HBxaI', title: 'Un taxi pour Tobrouk', director: 'Denis de la Patellière'},
{youtubeId: '0eMlfh5WQSQ', title: 'La bataille du rail', director: 'René Clément'},
{youtubeId: 'Hqh-IA-uncA', title: 'Lacombe Lucien', director: 'Louis Malle'},
{youtubeId: '30gAVrYgejs', title: 'La bataille d\Angleterre', director: 'Guy Hamilton'},
{youtubeId: 'rMbVrkvLDpw', title: 'le mur de l\Atlantique', director: 'Marcel Camus'},
{youtubeId: 'XzL67hWjXrI', title: 'On a retrouvé la 7ème compagnie', director: 'Robert Lamoureux'},
{youtubeId: 'k6HDBMtshZ0', title: 'Babette s\ va en guerre', director: 'Christian Jacque'},
{youtubeId: '4XQUNffE_p4', title: 'Papy fait de la résistance', director: 'Jean Marie Poiré'},
{youtubeId: 'FwTeQFqrDsc', title: 'Les héros de Telemark', director: 'Anthony Mann'},
{youtubeId: 'vq1CgvfshNw', title: 'La grande vadrouille', director: 'Gérard Oury'},
{youtubeId: '0xCM_pJw-lE', title: 'Le dictateur', director: 'Charlie Chaplin'},
{youtubeId: 'k5OcHE6-8NM', title: 'Weekend à Zuydcoote', director: 'Henri Verneuil'},
{youtubeId: '6gQnw1fbz38', title: 'La bataille des Ardennes', director: 'Ken Annakin'},
{youtubeId: 'HjnFZIsMk1o', title: 'les canons de Navarone', director: 'J. Lee Thomson'},
{youtubeId: 'csYdl_DWzgo', title: 'Les 12 salopards', director: 'Robert Aldrich'},
{youtubeId: 'cP11g-9vDeQ', title: 'Quand les aigles attaquent', director: 'Brian G. Hutton'},
{youtubeId: 'XAd_NLr-cYI', title: 'La vache et le prisonnier', director: 'Henri Verneuil'},
{youtubeId: 'FRg9E54lMgc', title: 'Au revoir les enfants', director: 'Louis Malle'},
{youtubeId: 'CtXkO7TJzi0', title: 'Rome ville ouverte', director: 'Roberto Rosselini'},
{youtubeId: 'Y1IEtzj23ws', title: 'Le train', director: 'Bernard Farrel'},
{youtubeId: 'xGAR3dNDXRY', title: 'Paris brûle-t-il ?', director: 'René Clément'},
{youtubeId: 'gIItQzepcd0', title: 'La ligne de démarcation', director: 'Claude Chabrol'},
{youtubeId: 'xrfeCAl3Be4', title: 'Monsieur Batignole', director: 'Gérard Jugnot'},
{youtubeId: 'SmEdhTjf0iA', title: '1941', director: 'Steven Spielberg'},
{youtubeId: 'tvYjJHtlV1w', title: 'les morfalous', director: 'Henri Verneuil'},
{youtubeId: 'NVFkVwmASd0', title: 'l\ Ciceron', director: 'Joseph L Mankiewicz'},
{youtubeId: 'xZ0tHEZQyo0', title: 'Indigènes', director: 'Rachid Bouchareb'},
{youtubeId: '36xCKzaNbqc', title: 'le caporal épinglé', director: 'Jean Renoir'},
{youtubeId: 'dRKelHbcZ7s', title: 'Mais où est donc passée la ème compagnie ?', director: 'Robert Lamoureux'},
{youtubeId: 'Uu6mnsGPFGs', title: 'la 7ème compagnie au clair de lune', director: 'Robert Lamoureux'},
{youtubeId: 'HbX1ZIuD0ac', title: 'Croix de fer', director: 'Sam Peckinpah'},
{youtubeId: 'OqTucm-JgOk', title: 'La ligne rouge', director: 'Terence Malick'},
{youtubeId: '2GnrJNVxWAE', title: 'Le pont de la rivière Kwai', director: 'David Lean'},
{youtubeId: 'tk7pH1hTy64', title: 'La vie est belle ', director: 'Roberto Benigni'},
{youtubeId: '_lqbD0IY4XA', title: 'Fury ', director: 'David Ayer'},
{youtubeId: 'ZRQH0vIw3No', title: 'la chute ', director: 'Olivier Hirsscbiegel'},
{youtubeId: 'LwawaBrwMgc', title: 'les oubliés ', director: 'Martin Zandvliet'},
{youtubeId: 'ysA3Y82L4Oo', title: 'L\armée du crime ', director: 'Robert Guédiguian'},
{youtubeId: 'AZAgbbqaa5g', title: 'Lucie Aubrac ', director: 'Claude Berri'},
{youtubeId: 'dYKELeheAJA', title: 'Le silence de la mer ', director: 'Pierre Boutron'},
{youtubeId: 'FhD8fmIGQRI', title: 'le fou de guerre ', director: 'Dino Risi'},
{youtubeId: 'o33u3cM4cFg', title: 'une affaire de femmes ', director: 'Claude Chabrol'},
{youtubeId: '7LZmdf6b0P8', title: 'zone libre ', director: 'Christophe Malavoy'},
{youtubeId: 'wum2WIyQfUk', title: 'Un sac de billes ', director: 'Jacques Doillon'},
{youtubeId: 'rgEPJjv_HqM', title: 'les milles ', director: 'Sébastien Grall'},
{youtubeId: 'xhRqhQ3w6BA', title: 'le chagrin et la pitié ', director: 'Marcel Ophuls'},
{youtubeId: 'YPrIr-5uwyY', title: 'Fortunat ', director: 'Alex Joffé'},
{youtubeId: 'Z-dIbMuODsA', title: 'la traversée de Paris ', director: 'Claude Autant-Lara'},
{youtubeId: 'iKGnZUm941U', title: 'le port de l\angoisse ', director: 'Howard Hawks'},


];

const TIMER = 30;
const TIMER_STEP = 100;

class WWII extends Component {
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

export default WWII;

// style={'background-color': 'white'; height: 10px; width: 700px; position: absolute; bottom: 40px; left: 40px;"