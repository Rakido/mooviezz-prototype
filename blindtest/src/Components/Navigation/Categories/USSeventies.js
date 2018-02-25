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
// {youtubeId: '1SA6rrKzzdw', title: 'Le parrain', director: 'Francis Ford Coppola'},
// {youtubeId: 'PUuA-kLHSK8', title: 'Taxi driver', director: 'Martin Scorcese'},
// {youtubeId: 'rfo9nWab_ns', title: 'Apocalypse now', director: 'Francis Ford Coppola'},
// {youtubeId: 'drEI30pHPo0', title: 'Les dents de la mer', director: 'Steven Spielberg'},
// {youtubeId: 'AcghhQg9Dp8', title: 'Orange mécanique', director: 'Stanley Kubrick'},
// {youtubeId: 'negTy42hInQ', title: 'Vol au dessus d\ un nid de coucou', director: 'Milos Forman'},
// {youtubeId: 'lGl15LJKPuw', title: 'Le parrain 2', director: 'Francis Ford Coppola'},
// {youtubeId: '3Z_36I2Q-_U', title: 'L\exorciste', director: 'William Friedkin'},
// {youtubeId: 'Km9zE4u4Aek', title: 'Little big man', director: 'Arthur Penn'},
// {youtubeId: 'jC-6LkJ0NwY', title: 'Un après midi de chien', director: 'Sidney Lumet'},
// {youtubeId: 'KkJZOxqB-qk', title: 'Barry Lindon', director: 'Stanley Kubrick'},
// {youtubeId: 'bDdvZ6UfV54', title: 'La fièvre du samedi soir', director: 'John Badham'},
// {youtubeId: 'o-vgfolxW3s', title: 'Duel', director: 'Steven Spielberg'},
// {youtubeId: '_m4UJDTIErA', title: 'les moissons du ciel', director: 'Therrence Malick'},
// {youtubeId: 'Q-ODT-0EoqI', title: 'Massacre à la tronçonneuse', director: 'Tobe Hooper'},
// {youtubeId: '_Mev59MDBps', title: 'Une femme sous influence', director: 'John Cassavetes'},
// {youtubeId: 'qSCZRe16vus', title: 'Klute', director: 'Alan J. Pakula'},
// {youtubeId: 'ukO-rWjMOKw', title: 'Midnight Express', director: 'Alan Parker'},
// {youtubeId: 'MAgzE7BtEWA', title: 'Manhattan', director: 'Woody Allen'},
// {youtubeId: 'VNSd9hDWWd4', title: 'L\évadé d\ Alcatraz', director: 'Don Siegel'},
  {youtubeId: 'LUID0jSh2Ic', title: 'La fièvre du samedi soir', director: 'Bee Gees', year: '1978'},
{youtubeId: 'Pw2Nc0HHeIA', title: 'SOS fantômes', director: 'Ivan Reitman', year: '1984'},
{youtubeId: '8huTeg8LGgg', title: 'Shining', director: 'Stanley Kubrick', year: '1980'},
{youtubeId: 'a6RYGKEExS0', title: 'Full metal jacket', director: 'Stanley Kubrick', year: '1987'},
{youtubeId: 'NmUH7yqRv5U', title: 'Rain man', director: 'Barry Levinson', year: '1988'},
{youtubeId: 'nHiUZ77NGNk', title: 'Abyss', director: 'James Cameron', year: '1989'},
{youtubeId: '-_KkgPRo4wA', title: 'Les blues brothers', director: 'John Landis', year: '1980'},
{youtubeId: 'SpGqeYBEB8g', title: 'Quand Harry rencontre Sally', director: 'Rob Reiner', year: '1989'},
{youtubeId: 'FD8wthFEi0s', title: 'Blade Runner', director: 'Ridley Scott', year: '1982'},
{youtubeId: 'sF19L00KbAI', title: 'Elephant man', director: 'David Lynch', year: '1981'},
{youtubeId: 'Vqt3DutfqQw', title: 'Predator', director: 'John McTiernan', year: '1987'},
{youtubeId: 'mk5ER1tJbdM', title: 'ET l\extra terrestre', director: 'Steven Spielberg', year: '1982'},
{youtubeId: 'BUsjEw-1Eik', title: 'Le cercle des poètes disparus', director: 'Peter Weir', year: '1989'},
{youtubeId: 'K7BCaGVfyWw', title: 'DressÈ pour tuer', director: 'Samuel Fuller', year: '1982'},
{youtubeId: 'eqfDHr5fVJs', title: 'La couleur pourpre', director: 'Steven Spielberg', year: '1982'},
{youtubeId: 'mDbqIGFtYRo', title: 'Le convoi', director: 'Sam Peckinpah', year: '1978'},
{youtubeId: 'WoCU97RqwH0', title: 'La couleur de l\argent', director: 'Martin Scorsese', year: '1986'},
{youtubeId: 'u5YVzGh6X24', title: 'La valse des pantins', director: 'Martin Scorsese', year: '1983'},
{youtubeId: 'bw3i-ofKbQg', title: 'La dernière tentation du christ', director: 'Martin Scorsese', year: '1988'},
{youtubeId: 'LBJBAcOQMa4', title: 'Scarface', director: 'Brian De Palma', year: '1984'},
{youtubeId: 'kGWMB7zEF5c', title: 'Platoon', director: 'Oliver Stone', year: '1987'},
{youtubeId: '0YMCWR8jzpU', title: 'Paris Texas', director: 'Wim Wenders', year: '1984'},
{youtubeId: 'aKBCyW-eIe0', title: 'Pink Floyd the wall', director: 'Alan Parker', year: '1982'},
{youtubeId: 'HJsXp4q5ps0', title: 'Mississipi burning', director: 'Alan Parker', year: '1989'},
{youtubeId: 'tl5MPuNHNuM', title: 'Love Steams', director: 'John Cassavetes', year: '1985'},
{youtubeId: 'QXmAwU9slFo', title: 'L\empire du soleil', director: 'Steven Spielberg', year: '1988'},
{youtubeId: 'ART5pmT6zro', title: 'Bird', director: 'Clint Eastwood', year: '1988'},
{youtubeId: '77C-dpdYqek', title: 'Blow Out', director: 'Brian De Palma', year: '1982'},
{youtubeId: 'WXwxdCUPubs', title: 'Ragtime', director: 'Milos Forman', year: '1982'},
{youtubeId: 'GQaTRaDkIIs', title: 'Good Morning Vietnam', director: 'Barry Levinson', year: '1988'},


];

const TIMER = 30;
const TIMER_STEP = 100;

class USSeventies extends Component {
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
        <SubBarSite name="Films US" score={this.state.score} extrait={this.state.extrait}/>
        <div className="GameBoard" >
          
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

export default USSeventies;

// style={'background-color': 'white'; height: 10px; width: 700px; position: absolute; bottom: 40px; left: 40px;"