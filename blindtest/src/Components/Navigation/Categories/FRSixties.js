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
 {youtubeId: '7a5WmQ-EBzQ', title: 'L\armée des ombres', director: 'Jean Pierre Melville'},
  {youtubeId: 'btIkYYTFqDQ', title: 'Les tontons flingueurs', director: 'Georges Lautner'},
  {youtubeId: 'mlx4ldY-9x0', title: 'A bout de souffle', director: 'Jean Luc Godard'},
  {youtubeId: 'jbBuoDTnvkw', title: 'Le corniaud', director: 'Gérard Oury'},
  {youtubeId: 'yfLDLINL8s0', title: 'Le cerveau', director: 'Gérard Oury'},
  {youtubeId: 'LjDNfK99Pec-c', title: 'Playtime', director: 'Jacques Tati'},
  {youtubeId: '8ZVocWZQUB0', title: 'Fantomas se déchaine', director: 'André Hunebelle'},
  {youtubeId: 'xzYmlqw2gsc', title: 'Un singe en hiver', director: 'Henri Verneuil'},
  {youtubeId: 'X4BY8h9B92M', title: 'Tirez sur le pianiste', director: 'François Truffaut'},
  {youtubeId: 'wtfB5Ah_HDc', title: 'La vérité', director: 'Henri Georges Clouzot'},
  {youtubeId: 'aWJHXR_dmhI', title: 'Mélodie en sous sol', director: 'Henri Verneuil'},
  {youtubeId: 'drLNncvhnUo', title: 'La piscine', director: 'Jacques Deray'},
  {youtubeId: 'iCLWSAPZV2Q', title: 'Le clan des siciliens', director: 'Henri Verneuil'},
  {youtubeId: 'kLXNBu6_JNA', title: 'Les parapluies de Cherbourg', director: 'Jacques Demy '},
  {youtubeId: 'c0S3ni0BVGg', title: 'Le Pacha', director: 'Georges Lautner'},
  {youtubeId: 'nHZH9_lkWTQ', title: 'Bande à part', director: 'Jean Luc Godard'},
  {youtubeId: 'lp41bjlLS4U', title: 'Les demoiselles de Rochefort', director: 'Jacques Demy'},
  {youtubeId: '6NGHRgN6NEw', title: 'Le vieil homme et l\enfant', director: 'Claude Berri'},
  {youtubeId: 'm0XRcbP2Z7c', title: 'Le journal d une femme de chambre', director: 'Luis Buñuel'},
  {youtubeId: 'R9EKF_IJnfo', title: 'Le cave se rebiffe', director: 'Gilles Grangier'},
  {youtubeId: 'gtB5NqZUcHk', title: 'Le grand restaurant', director: 'Jaques Besnard'},
  {youtubeId: 'UVGcM4-RTxI', title: 'la menace', director: 'Gérard Oury'},
  {youtubeId: 'a8QixyY4iaA', title: 'Une femme est une femme', director: 'Jean Luc Godard'},
  {youtubeId: 'eaPNyjGVsi4', title: 'Adorable menteuse', director: 'Michel Deville'},
  {youtubeId: 'Ne30s-lIv_4', title: 'La guerre des boutons', director: 'Yves Robert'},
  {youtubeId: '07kWR1dF51Y', title: 'La Fayette', director: 'Jean Dreville'},
  {youtubeId: 'xk1y38avmD8', title: 'Le monocle rit jaune', director: 'Georges Lautner'},
  {youtubeId: 'QNSSu3vLEas', title: 'Viva Maria', director: 'Louis Malle'},
  {youtubeId: 'aUn6bMBfhJ4', title: 'Un homme et une femme', director: 'Claude lelouch'},
  {youtubeId: '8HTTQ5_6n4k', title: 'Mouchette', director: 'Robert Bresson'},
  {youtubeId: 'mI5XID8-Un4', title: 'Baisers volés', director: 'François Truffaut'},
  {youtubeId: 'EfbEK9ogmmM', title: 'la grande sauterelle', director: 'Georges Lautner'},
  {youtubeId: 'sZS5jox7074', title: 'Le samourai', director: 'Jean Pierre Melville'},
  {youtubeId: 'qdeY-ZBcS-8', title: 'les tribulations d un chinois en Chine', director: 'Philippe de Broca'},
  {youtubeId: 'gpgNh2ZzRek', title: 'L\insoumis', director: 'Alain Cavalier'},
  {youtubeId: 'Lc-sZBVcLRE', title: 'le gendarme de Saint Tropez ', director: 'Jean Girault'},
   {youtubeId: 'KBU7EH_z6GM', title: 'Le ballon rouge', director: 'Albert Lamorisse'},
{youtubeId: 'oaewSy_Uolc', title: 'Crin blanc', director: 'Albert Lamorisse'},
{youtubeId: '3lqM62th0Ro', title: 'La traversée de Paris', director: 'Claude Autant-Lara'},
{youtubeId: 'icJw9HXXoXA', title: 'Ascenseur pour l\échafaut', director: 'Louis Malle'},
{youtubeId: '7FPmlJUiVfU', title: 'Le salaire de la peur', director: 'Henri-Georges Clouzot'},
{youtubeId: 'gkvtE1AS6Qo', title: 'Mon oncle', director: 'Jacques Tati'},
{youtubeId: 'nkNK6RkoIS8', title: 'Les vacances de Monsieur Hulot', director: 'Jacques Tati'},
{youtubeId: '59gKjPWS1Vk', title: 'Touchez pas au Grisbi', director: 'Jacques Becker'},
{youtubeId: 'D9iZCWr1w8k', title: 'Thérèse Raquin', director: 'Marcel Carné'},
{youtubeId: 'PezVlcX4S7U', title: 'Gervaise', director: 'René Clément'},
{youtubeId: 'y485yHJqFnY', title: 'Le petit monde de Don Camillo', director: 'Julien Duvivier'},
{youtubeId: 'xwQ4Zt6Me9s', title: 'Knock', director: 'Guy Lefranc'},
{youtubeId: 'RPhTDqiERlQ', title: 'Casque d\or', director: 'Jacques Becker'},
{youtubeId: 'oUTeJ52rnKs', title: 'Jeux interdits', director: 'René Clément'},
{youtubeId: 'Mgc03Ii_uGM', title: 'Nuit et brouillard', director: 'Alain Resnais '},
{youtubeId: 'KEjGoHLOdwA', title: 'Razzia sur la chnouf', director: 'Henri Decoin'},
{youtubeId: 'PVaARStgtqU', title: 'La beauté du diable', director: 'René Clair'},
{youtubeId: 'LPfKXOIa3-0', title: 'French cancan', director: 'Jean Renoir'},
{youtubeId: 'GZw2CJnfz0E', title: 'Les mistons', director: 'François Truffaut'},
{youtubeId: '-62_6liEFO4', title: 'Le rouge est mis', director: 'Gilles Grangier'},
{youtubeId: 'bO8XIm6bbgA', title: 'Les 400 coups', director: 'François Truffaut'},
{youtubeId: 'eZNxnx4DfIg', title: 'Les cousins', director: 'Claude Chabrol'},
{youtubeId: 'MFTsniRQx9A', title: 'Le plaisir', director: 'Max Ophuls'},
{youtubeId: 'db-tY60460', title: 'Un condamné à mort s\est échappé', director: 'Robert Bresson'},
{youtubeId: 'PxtmpZJrj8M', title: 'Bob le flambeur', director: 'Jean Pierre Melville'},
{youtubeId: '0EcxVshlgro', title: 'Assassins et voleurs', director: 'Sacha Guitry'},
{youtubeId: 'xlgTPJyU9ek', title: 'La minute de vérité ', director: 'Jean Delannoy'},
{youtubeId: 'nMPpmz16Sc4', title: 'Le beau serge', director: 'Claude Chabrol'},
{youtubeId: '8MYvxf1iDMs', title: 'La Marie du Port', director: 'Marcel Carné'},
{youtubeId: 'VsUG551zSlg', title: 'Archimède le clochard', director: 'Gilles Grangier'},
{youtubeId: 'MeE8qEs4VSc', title: 'Le désordre et la nuit', director: 'Gilles Grangier'},
{youtubeId: 'RuprRho8dG8', title: 'La vérité sur Bébé Donge', director: 'Henri Decoin'},
{youtubeId: 'TuWQJ81DduI', title: 'Folies Bergère', director: 'Henri Decoin'},
{youtubeId: 'knaJd298xE0', title: 'Pickpoket', director: 'Robert Bresson'},
{youtubeId: 'cHqXjRAbCwA', title: 'Echec au porteur', director: 'Gilles Grangier'},
{youtubeId: 'N2iYIiS1Swk', title: 'A double Tour', director: 'Claude Chabrol'},
{youtubeId: 'wdM31K1BM2c', title: 'Miquette et sa mère', director: 'Henri Georges Clouzot'},
{youtubeId: '6ophF0MXkx0', title: 'Souvenirs perdus', director: 'Christian Jaque'},
{youtubeId: 'nwCD7g9ykbE', title: 'La loi', director: 'Jules Dassin'},
{youtubeId: 'CSLXCksPmjo', title: 'Orphée', director: 'Jean Cocteau'},
{youtubeId: 'NPpLHJDknuc', title: 'Garou Garou le passe muraille', director: 'Jean Boyer'},
{youtubeId: 'FNrpU_WqbMo', title: 'Le trou normand', director: 'Jean Boyer'},
{youtubeId: 'IWz1FClg8Iw', title: 'Les grandes manoeuvres', director: 'René Clair'},
{youtubeId: '_JqsY_eyot4', title: 'En cas de malheur', director: 'Claude Autant-Lara'},
{youtubeId: 'KTsC9ij_XHs', title: 'Le blé en herbe', director: 'Claude Autant-Lara'},
{youtubeId: '1YsiJMqsjU8', title: 'Le journal d\ un curé de campagne', director: 'Robert Bresson'},
]

const TIMER = 30;
const TIMER_STEP = 100;

class FRSixties extends Component {
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

export default FRSixties;

// style={'background-color': 'white'; height: 10px; width: 700px; position: absolute; bottom: 40px; left: 40px;"