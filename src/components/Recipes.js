import React, { Component } from "react";
import Recipe from './Recipe';

class Recipes extends Component {
  render(props) {
    return (
      <div className="recipesjs">
        <Recipe
          recipes={this.props.recipes}
          openDialog={this.props.openDialog}
        />
      </div>
    )
  }
}

export default Recipes;
