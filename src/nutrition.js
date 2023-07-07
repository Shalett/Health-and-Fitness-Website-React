//home.js

import React from "react";
import "./nutrition.css";

const Nutrition = () =>{
	return(
		<section className="Nutrition">
		 <h1>Welcome to the Health and Fitness Website</h1>

<h2>Nutrition Section</h2>
<p class='content'>Here you can find various exercises and workout routines to help you stay active and fit.</p>
<ul>
  <h3 class='container'>Balanced Macronutrient Ratio:</h3>
  <div align="center">
  <img src={require('./macronutrients.jpg')} width="450px" height="360px" />
  </div>
  <p class='content'>
This type of nutrition plan focuses on maintaining a balanced ratio of macronutrients, which are carbohydrates, 
proteins, and fats. The idea is to consume a moderate amount of each macronutrient to support overall health and fitness 
goals. Generally, a balanced macronutrient ratio might include around 40% carbohydrates, 30% protein, and 30% fat.
 This approach provides energy for workouts, supports muscle growth and repair, and ensures sufficient fat intake for hormone production.</p>
  <h3 class='container'>High-Protein Diet:</h3>
  <div align="center">
  <img src={require('./protein.jpeg')} width="450px" height="360px" />
  </div>
  <p class='content'> 
  A high-protein nutrition plan is popular among individuals aiming to build muscle mass or support strength training.
  This approach emphasizes consuming a higher proportion of protein in the diet. Protein is essential for muscle repair
  and growth. Typically, a high-protein diet may include around 30-40% of total daily calories from protein sources
  such as lean meats, fish, eggs, dairy, legumes, and plant-based proteins. Adequate carbohydrates and fats are also
  consumed to meet energy needs.</p>
  <h3 class='container'>Low-Carb or Ketogenic Diet:</h3>
  <div align="center">
  <img src={require('./ketogenic.jpg')} width="450px" height="360px" />
  </div>
  <p class='content'>The low-carb or ketogenic diet is a nutrition plan that restricts carbohydrate intake while increasing fat 
     consumption. This approach aims to shift the body into a metabolic state called ketosis, where it primarily uses
     fat for fuel instead of carbohydrates. By minimizing carb intake, the body depletes its glycogen stores and starts
     breaking down fats for energy. Typically, a ketogenic diet consists of high-fat foods (70-75% of total calories),
     moderate protein intake (20-25% of total calories), and very low carbohydrate intake (5-10% of total calories).</p>
</ul>
<footer>
<p class='content'>&copy; 2023 Health and Fitness Website. All rights reserved.</p>
</footer>
		</section>
	)
}

export default Nutrition;