import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// Importer le CSS //

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

// Importer les components //

import Home from './Components/Navigation/Home';
import Categories from './Components/Navigation/Categories';

// Importer les catégories

import Blockbuster from './Components/Navigation/Categories/Blockbusters';
import FRSixties from './Components/Navigation/Categories/FRSixties';
import Western from './Components/Navigation/Categories/western';
import italy from './Components/Navigation/Categories/italy';
import FilmCulte from './Components/Navigation/Categories/filmculte';
import FRFifties from './Components/Navigation/Categories/FRFifties';
import USSeventies from './Components/Navigation/Categories/USSeventies';
import WWII from './Components/Navigation/Categories/WWII';
import FRSeventies from './Components/Navigation/Categories/FRSeventies';
import FREighties from './Components/Navigation/Categories/FREighties';
import Chanson from './Components/Navigation/Categories/Chanson';


ReactDOM.render(
	<BrowserRouter>
		<div className='container'>
			<Route exact path='/' component={Home} />
			<Route path='/categories' component={Categories} />
			<Route path='/blockbusters' component={Blockbuster} />
			<Route path='/frenchsixties' component={FRSixties} />
			<Route path='/western' component={Western} />
			<Route path='/italy' component={italy} />
			<Route path='/cultes' component={FilmCulte} />
			<Route path='/frenchfifties' component={FRFifties} />
			<Route path='/usseventies' component={USSeventies} />
			<Route path='/wwii' component={WWII} />
			<Route path='/frenchseventies' component={FRSeventies} />
			<Route path='/frencheighties' component={FREighties} />
			<Route path='/chanson' component={Chanson} />

			
		</div>
	</BrowserRouter>
	, document.getElementById('root'));

