import React from "react";
import "./Form.css"

const Form = props => {
  return (
    <form onSubmit={props.getRecipe}>
      <input type="text" name="recipeName" />
      <button>Search</button>
    </form>
  );
};

export default Form;
