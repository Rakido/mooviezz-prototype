import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

// Importer le CSS //

import './Home.css'

// Importer la navbar

import TopBar from './NavBar/TopBar';
import { Video } from './HomeElements';
import { Main } from './HomeElements';

class Home extends React.Component {
	render() {
		return (
			<div className="home">
        		
           			<div className="content">
            		<Main />
            		
					
            	</div>

            	<div className="video">
        			<Video />
        		</div>
           </div>
		)
	}
}

export default Home