import React, { Component } from "react";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

import "./App.css";

const API_KEY = "cc33a02c16fadb22aea4ecea7184fee1";
const API_ID = "14c68664";

class App extends Component {
  state = { recipes: [] };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    //console.log(recipeName);
    e.preventDefault();
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=10&calories=591-722`
    );

    const data = await api_call.json();
    //console.log(data.hits[0].recipe.label);
    this.setState({ recipes: data.hits });
    console.log(this.state.recipes);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
