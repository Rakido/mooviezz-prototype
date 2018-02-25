import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import FaPlay from 'react-icons/lib/fa/play';
import FaEye from 'react-icons/lib/fa/eye';
import FaTrophy from 'react-icons/lib/fa/trophy';

import './SubBar.css'

class SubBarSite extends React.Component {
	render() {
		return(

			<Navbar className="SubBarSite">
		
				
				<Nav className="auto" navbar>
					<NavItem>
                		<NavLink className="resume">
                			<div className="live"><span>LIVE </span></div>
                			
                			<div className="name"> {this.props.name} </div>

                			<div className="extrait">|  Extrait {this.props.extrait}/15</div>

                			<div className="compteur">|  {this.props.score} Points </div>
                		
                			
                		<div className='points'> 
							<ul>
							<li > </li>
							<li > </li>
							<li > </li>
							<li > </li>
							<li > </li>
							<li > </li>
							<li > </li>
							<li > </li>
							<li > </li>
							<li > </li>


							</ul>
						</div>
                		
                		</NavLink>
              			
              		</NavItem>
              		
						
              		
              		
              		
				</Nav>
			</Navbar>


			)


		}
}

export default SubBarSite;

