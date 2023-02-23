import React from "react";
import { useState, useEffect } from "react";
import MealList from "./MealList";
function Mealss() {
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
    </div>
  );
}
export default Mealss;
