import React, { Component } from "react";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import Dialog from './components/Dialog';
import uuid from "uuid";

import "./App.css";

const API_KEY = "cc33a02c16fadb22aea4ecea7184fee1";
const API_ID = "14c68664";

class App extends Component {
  state = {
    recipes: [],
    isOpen: false
  };

  openDialog = () => {
    this.setState({ isOpen: true })
  }

  closeDialog = () => {
    this.setState({ isOpen: false })
  }

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    //console.log(recipeName);
    e.preventDefault();
    const api_call = await fetch(
      `https://api.edamam.com/search?q=${recipeName}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=10&calories=591-1000`
    );
    // https://api.edamam.com/search?q=chicken&app_id="14c68664"&app_key="cc33a02c16fadb22aea4ecea7184fee1"&from=0&to=3&calories=591-722
    const data = await api_call.json();
    this.setState({ recipes: data.hits });
  };

  // to keep the home page populated when retuning from a single recipe view
  componentDidUpdate = () => {
    //convert the state recipes to a json string and then save it in localStorage
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    //convert the json string into an object
    const recipes = JSON.parse(json);
    this.setState({ recipes: recipes })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes
          recipes={this.state.recipes}
          isOpen={this.state.isOpen}
          openDialog={this.openDialog}
        />
        <Dialog
          isOpen={this.state.isOpen}
          closeDialog={this.closeDialog}
          recipes={this.state.recipes}
          id={uuid.v4()}
        />
      </div>
    );
  }
}

export default App;
