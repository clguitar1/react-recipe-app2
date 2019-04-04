import React from "react";
import "./Form.css"

const Form = props => {
  return (
    <form onSubmit={props.getRecipe}>
      <input type="text" name="recipeName" />
      <button className="btn btn-outline">Search</button>
    </form>
  );
};

export default Form;
