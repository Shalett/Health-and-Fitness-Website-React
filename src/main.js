//home.js

import React from "react";
//import './img.css';

const Main = () =>{
	return(
		<div>
		<section className="Main">
		<h1>Welcome to the Health and Fitness Website</h1>

		<h2>Home Section</h2>
		<p class='content'>Welcome to Health is Wealth Fitness, your ultimate destination for all things health, fitness, and nutrition! We are
		dedicated to helping you lead a healthier, happier, and more fulfilling life through expert advice, valuable resources, and actionable tips.
		We understand that maintaining a healthy lifestyle can be challenging, especially with the overwhelming amount of information out there. 
		That's why we have curated a comprehensive collection of articles, guides, 
		and videos to provide you with reliable and up-to-date information on a wide range of health-related topics.
<br></br><br></br><br></br>
		</p>
		<div align="center">
		<img src={require('./img1.jpeg')} width="300px" height="260px" /> 
		<img src={require('./img3.jpeg')} width="300px" height="260px" /> 
		<img src={require('./img2.jpg')} width="300px" height="260px" />



		</div>

	<footer>
		<p>&copy; 2023 Health and Fitness Website. All rights reserved.</p>
	  </footer>
		
	</section>
	</div>
	)
}

export default Main;