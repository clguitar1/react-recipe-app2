import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = "cc33a02c16fadb22aea4ecea7184fee1";
const API_ID = "14c68664";

class Recipe extends Component {
  state = {
    activeRecipe: []
  }

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=10&calories=591-1000`
    );
    // https://api.edamam.com/search?q=chicken&app_id="14c68664"&app_key="cc33a02c16fadb22aea4ecea7184fee1"&from=0&to=3&calories=591-722
    const res = await req.json();
    //console.log(res);
    this.setState({ activeRecipe: res.hits[0].recipe })
    //console.log(this.state.activeRecipe);
  }

  render() {
    const recipe = this.state.activeRecipe;
    const { label, ingredients, ingredientLines, image, url } = this.state.activeRecipe;
    // for (const prop in ingredients) {
    //   console.log(prop);
    // }


    return (
      <div className="App">
        {this.state.activeRecipe.length !== 0 &&
          <div>
            <img src={image} alt={label} />
            <h2>{label}</h2>
            <p>Ingredients:</p>
            <ul>
              <li>{ingredientLines}</li>
            </ul>
            <p>Website: <a href={url}>{url}</a></p>

            <Link className="btn btn-outline" to="/">Home</Link>

          </div>
        }
      </div>
    )
  }
}

export default Recipe;

