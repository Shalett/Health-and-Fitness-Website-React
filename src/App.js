//import logo from './logo.svg';
//import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import Nutrition from "./nutrition";
import Main from "./main";
import Exercise from "./exercise";
import './button.css';

class App extends React.Component{
	render(){
		return(
			<body style={{
			  backgroundColor:'#f5f5dc',
			}}>
	  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide"></link>
			<div className='App'>
				<h1 class='head'>Health & Fitness.</h1>


			<Router>
				<Link to="/">
					<button class="button" >Home</button>
				</Link> {'\n'}

				<Link to="/nutrition">
					<button class="button" >Nutrition</button>
				</Link> {'\n'}

				<Link to="/exercise">
					<button class="button" >Exercise</button>
					</Link>{'\n'}
				<Routes>

					<Route path="/" element={<Main />} />
					<Route path="/nutrition" element={<Nutrition />} />
					<Route path="/exercise" element={<Exercise />} />
				
				</Routes>
			</Router>


			</div>
			</body>
		);
	}
}


export default App;