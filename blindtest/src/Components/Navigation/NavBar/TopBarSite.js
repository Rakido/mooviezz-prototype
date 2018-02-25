import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class TopBarSite extends React.Component {
	render() {

		const style = {
		    opacity: '0.5',
		  };

		return(

			<Navbar color='#202020' expand="md" className="TopBarSite">
				<NavbarBrand href='/'> Moviezz </NavbarBrand>
				
				<Nav className="ml-auto" navbar style={style}>
					<NavItem>
                		<NavLink href="/categories/">Categories</NavLink>
              		</NavItem>

              		<NavItem>
                		<NavLink href="/components/">Scores</NavLink>
              		</NavItem>

              		<NavItem>
                		<NavLink href="/components/">Forum</NavLink>
              		</NavItem>

              		<NavItem>
                		<NavLink href="/components/">About</NavLink>
              		</NavItem>
				</Nav>
			</Navbar>


			)


		}
}

export default TopBarSite;