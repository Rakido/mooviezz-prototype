import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText, Jumbotron } from 'reactstrap';
// import '.home.css';
import ReactPlayer from 'react-player';
// import { FooterHome } from './Footer';
import TopBar from './NavBar/TopBar'
import { NavLink } from 'react-router-dom';

export class Main extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

    render() {
      return(
          <div>
          <Jumbotron>
            <div className="header">
            <TopBar />
            </div>
            <h1 className="display-3">A blind test for movie lovers</h1>
            <p className="lead">Challenge yourself and your friends in many categories. <br />
             Discover new films, new styles and new directors. <br /> Save your favorite movies to watch them later.</p>
            <div>
            
          </div>
           
          <div className="buttons">
            <NavLink className='active' to='/categories'>
            <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}Play Now</Button>{' '}
            </NavLink>
            <Button outline color="secondary" disabled>Learn More</Button>
          </div>

          
           
          </Jumbotron>
          
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              
              <ModalHeader toggle={this.toggle}>Create Your Account</ModalHeader>
              <ModalBody>
                <FormGroup >
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="Type a valid email" />
                </FormGroup>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="And a password" />
                </FormGroup>

              <ModalHeader>Or Continue as guest</ModalHeader>
                <FormGroup>
                  <Input type="pseudo" name="pseudo" id="examplePseudo" placeholder="Guest0234" />
                </FormGroup>
              </ModalBody>

            <ModalFooter>
            <Link to="/categories"><Button color="primary" onClick={this.toggle.MyCard}>Do Something</Button></Link>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </Modal>

          </div>
          );
        }
      };




export class Video extends React.Component {
  render () {
    return <ReactPlayer width='100%' height='100%' playing='autoplay'url='https://www.youtube.com/watch?v=K_PR9t6a9ao'/>
  }
}

export default Video;
