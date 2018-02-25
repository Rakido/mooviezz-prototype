import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Video } from './HomeElements';


import { NavLink } from 'react-router-dom';

// Importer le CSS //

import './Categories.css'

// Import ReactStrap Elements

import TopBarSite from './NavBar/TopBarSite';

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';


class Categories extends React.Component {
	render() {

      const color = {
      color: '#FDCC51',
      };

      const color2 = {
      color: '#3EC396'
      };

      const color3 = {
      color: '#FF9743'
      };

      const color4 = {
      color: '#7AD7D5'
      };

		return (
			<Container>

        <TopBarSite />

        <div className='greetings'>
         <h1> Découvrez toutes nos salles  </h1>
         </div>
        <div className="categories" >
        
        <span style={color}> <NavLink to='/frenchsixties'> Chez les yéyés  </NavLink>  </span> 
        <div className="subtitle"> Tous les films francais des années 50 - 60 </div><br />

        <span style={color2}> <NavLink to='/frencheighties'> Titre rigolo  </NavLink> </span> 
        <div className="subtitle"> Tous les films francais des années 70 - 80 </div><br />

        <span style={color3}> Western & Spaghetti </span> 
        <div className="subtitle"> Des westerns et des spaghettis </div><br />
        

        <span style={color4}> Le temps des héros </span>
        <div className="subtitle"> La seconde guerre mondiale </div><br />


        <span style={color}> <NavLink to='/usseventies'>You talking to me ? </NavLink></span>
        <div className="subtitle"> Les films US cultes</div><br />

        <span style={color2}> Boom ! Bam ! Bim </span>
        <div className="subtitle"> Les blockbusters </div><br />

       
        </div>

           
   			</Container>
			
		)
	}
}

export default Categories
// <TopBarSite />
//         <div className='greetings'>
//         <h1> Hello, Pseudo !  </h1>
//         </div>
//             <Row>
//             <Col>
//             <Card>
//             <NavLink className='active' to='/blockbusters'>
//             <CardImg top width="100%" src={require('./img/test-bluckbuster.png')} alt="Western" />
            
//             </NavLink>
//             </Card>
//             </Col>

//             <Col>
//             <Card>
//             <NavLink className='active' to='/frenchfifties'>
//             <CardImg top width="100%" src={require('./img/test-fifties.png')} alt="Card image cap" />
            
//             </NavLink>
//             </Card>
//             </Col>

//             <Col>
//             <Card>
//             <NavLink className='active' to='/frenchsixties'>
//             <CardImg top width="100%" src={require('./img/test-sixties.png')} alt="Card image cap" />
//             <CardBody>
//               <CardTitle>Les années 60</CardTitle>
//               <CardSubtitle>Nb de joueurs</CardSubtitle>
//             </CardBody>
//             </NavLink>
//             </Card>
//             </Col>
//             </Row>

//             <Row>
//             <Col>
//             <Card>
//             <NavLink className='active' to='/frenchseventies'>
//             <CardImg top width="100%" src={require('./img/frenchseventies.png')} alt="Card image cap" />
//             <CardBody>
//               <CardTitle>Les années 70</CardTitle>
//               <CardSubtitle>Nb de joueurs</CardSubtitle>
//             </CardBody>
//             </NavLink>
//             </Card>
//             </Col>

//              <Col>
//             <Card>
//             <NavLink className='active' to='/frencheighties'>
//             <CardImg top width="100%" src={require('./img/frenchseventies.png')} alt="Card image cap" />
//             <CardBody>
//               <CardTitle>Les années 80</CardTitle>
//               <CardSubtitle>Nb de joueurs</CardSubtitle>
//             </CardBody>
//             </NavLink>
//             </Card>
//             </Col>

//             <Col>
//             <Card>
//             <NavLink className='active' to='/western'>
//             <CardImg top width="100%" src={require('./img/western.png')} alt="Card image cap" />
//             <CardBody>
//               <CardTitle>Western</CardTitle>
//               <CardSubtitle>Nb de joueurs</CardSubtitle>
//             </CardBody>
//             </NavLink>
//             </Card>
//             </Col>

//             </Row>
            
//              <Row>

//             <Col>
//             <Card>
//             <NavLink className='active' to='/italy'>
//             <CardImg top width="100%" src={require('./img/italy.png')} alt="Card image cap" />
//             <CardBody>
//               <CardTitle>Film Italien</CardTitle>
//               <CardSubtitle>Nb de joueurs</CardSubtitle>
//             </CardBody>
//             </NavLink>
//             </Card>
//             </Col>
            
           
//             <Col>
//             <Card>
//             <NavLink className='active' to='/cultes'>
//             <CardImg top width="100%" src={require('./img/filmscultes.png')} alt="Card image cap" />
//             <CardBody>
//               <CardTitle>Film culte</CardTitle>
//               <CardSubtitle>Nb de joueurs</CardSubtitle>
//             </CardBody>
//             </NavLink>
//             </Card>
//             </Col>
            
            

//             <Col>
//             <Card>
//             <NavLink className='active' to='/wwii'>
//             <CardImg top width="100%" src={require('./img/wwii.png')} alt="Card image cap" />
//             <CardBody>
//               <CardTitle>Film WWII</CardTitle>
//               <CardSubtitle>Nb de joueurs</CardSubtitle>
//             </CardBody>
//             </NavLink>
//             </Card>
//             </Col>

//             </Row>

//             <Row>

//             <Col>
//             <Card>
//             <NavLink className='active' to='/usseventies'>
//             <CardImg top width="100%" src={require('./img/usseventies.png')} alt="Card image cap" />
//             <CardBody>
//               <CardTitle>US 70's</CardTitle>
//               <CardSubtitle>Nb de joueurs</CardSubtitle>
//             </CardBody>
//             </NavLink>
//             </Card>
//             </Col>

//             <Col>
//             </Col>

//             <Col>
//             </Col>
//             </Row>