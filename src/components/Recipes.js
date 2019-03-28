import React from "react";
import uuid from "uuid";

const Recipes = props => (
  <div>
    {props.recipes.map(x => {
      return (
        <div key={uuid.v4()}>
          <img src={x.recipe.image} alt={x.recipe.label} />
          <p>{x.recipe.label}</p>
        </div>
      );
    })}
  </div>
);

export default Recipes;
