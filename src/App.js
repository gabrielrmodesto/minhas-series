import React from 'react';
import Header from './Header';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

const Home = () => {
	return <h1>Home</h1>;
}
const Genero = () => {
	return <h1>Generos</h1>;
}

function App() {
	
	return (
		<Router>
			<div>
				<Header />
				<Route path="/" exact component={Home} />
				<Route path="/generos" component={Genero} />
			</div>
		</Router>
		
	);
}

export default App;
