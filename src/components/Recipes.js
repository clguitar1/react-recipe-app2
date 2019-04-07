import React, { Component } from "react";
import uuid from "uuid";
import { Link } from 'react-router-dom';

class Recipes extends Component {
  render(props) {
    return (
      <div className="recipesjs">
        <h1>Recipes.js</h1>
        <div className="row">
          {this.props.recipes.map(x => {
            return (
              <div className="col" key={uuid.v4()}>
                <div className="card">
                  <img src={x.recipe.image} alt={x.recipe.label} />
                  <div className="card-body">
                    <p>
                      {x.recipe.label.length < 30 ? `${x.recipe.label}` : `${x.recipe.label.substring(0, 35)}...`}
                    </p>
                    {/* <button className="btn btn-outline" onClick={this.props.openDialog}>See Recipe
                  </button> */}

                    <Link className="btn btn-outline" to={{
                      pathname: `/recipe/${x.recipe.label}`,
                      state: { recipe: x.recipe.label }
                    }}>View Recipe</Link>

                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}

export default Recipes;
