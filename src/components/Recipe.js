import React from 'react';
import uuid from "uuid";

const Recipe = (props) => {
  //console.log(props.id)
  return (
    <div className="row">
      {props.recipes.map(x => {
        return (
          <div className="col" key={uuid.v4()}>
            <div className="card">
              <img src={x.recipe.image} alt={x.recipe.label} />
              <div className="card-body">
                <p>{x.recipe.label}</p>
                <button className="btn btn-outline" onClick={props.openDialog}>View</button>
                <button className="btn btn-outline">Test</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default Recipe;

