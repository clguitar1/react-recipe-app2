import React from 'react';
import uuid from "uuid";

const Recipe = (props) => {
  //console.log(props.id)
  return (
    <div className="recipe.js">
      {props.recipes.map(x => {
        return (
          <div key={uuid.v4()}>
            <img src={x.recipe.image} alt={x.recipe.label} />
            <p>{x.recipe.label}</p>
            <button onClick={props.openDialog}>Open Dialog</button>
          </div>
        );
      })}
    </div>
  )
}

export default Recipe;

