import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imgurl, setImgurl] = useState("");
  useEffect(() => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=a32a1c43dea04f45b1d8ad45022e88fd&includeNutrition=false`
    )
      .then((response) => response.json())
      .then((data) => {
        setImgurl(data.image);
      })
      .catch(() => {
        console.log("Error");
      });
  }, [meal.id]);

  return (
    <div>
      <article>
        <h1>
          <b>{meal.title}</b>
        </h1>
        <img src={imgurl}></img>
        <ul>
          {" "}
          <li>Preparation Time : {meal.readyInMinutes} minutes</li>
          <li> Numer of servings : {meal.servings}</li>
        </ul>
        <a href={meal.sourceUrl}>View Receipe</a>
      </article>
    </div>
  );
}
