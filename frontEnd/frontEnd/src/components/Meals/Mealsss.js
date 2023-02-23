import React from "react";
import { useState, useEffect } from "react";
import Usernavigation from "../../pages/Navigation/Usernavigation";
import { Container, Box, Typography } from "@mui/material";
import MealList from "./MealList";
function Mealsss() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(345);

  //function Handle Chnage
  function handleChange(e) {
    setCalories(e.target.value);
  }
  //function Handle Chnage
  function getMeal() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=a32a1c43dea04f45b1d8ad45022e88fd&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
        console.log(data);
      })
      .catch(() => {
        console.log("ERROR OCCURED!!!");
      });
  }
  return (
    <div>
      <Usernavigation />
      <header id='header'>
        <nav className='main-header navbar navbar-expand navbar-blue navbar-light'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a
                className='nav-link'
                data-widget='pushmenu'
                href='#'
                role='button'
              >
                <i className='fas fa-bars' />
              </a>
            </li>
            <h4>UJ GYMNASIUM</h4>
          </ul>
        </nav>
      </header>

      <br></br>
      <br></br>
      <footer>
        <Container component='main' maxWidth='xs'>
          <article>
            <section>
              <input
                type='number '
                onChange={handleChange}
                placeholder='Enter Reccomemded Calories...'
              />
            </section>
            <hr />
            <button onClick={getMeal}>Get Todays MealPlan</button>
            {mealData && <MealList mealData={mealData} />}
          </article>
        </Container>
      </footer>
    </div>
  );
}
export default Mealsss;
