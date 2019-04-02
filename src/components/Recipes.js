import React, { Component } from "react";
import uuid from "uuid";
import Recipe from './Recipe';

class Recipes extends Component {
  render(props) {
    return (
      <div className="Recipes.js">
        <Recipe
          key={uuid.v4()}
          recipes={this.props.recipes}
          id={uuid.v4()}
          openDialog={this.props.openDialog}
        />
      </div>
    )
  }
}

export default Recipes;
