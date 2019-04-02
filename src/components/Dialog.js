import React from 'react';
import uuid from "uuid";

let dialogStyles = {
  width: '500px',
  maxWidth: '100%',
  margin: '0 auto',
  position: 'fixed',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: '999',
  backgroundColor: '#eee',
  padding: '10px 20px 40px',
  borderRadius: 'j8px',
  display: 'flex',
  flexDirection: 'column'
};

let dialogCloseButtonStyles = {
  marginBottom: '15px',
  padding: '3px 8px',
  cursor: 'pointer',
  borderRadius: '50%',
  border: 'none',
  width: '30px',
  height: '30px',
  fontWeight: 'bold',
  alignSelf: 'flex-end'
};

const Dialog = (props) => {
  console.log(props.recipes)
  // let dialog = (
  //   <div style={dialogStyles}>
  //     <h1>Dialog.js</h1>
  //     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est tempora veniam sed nesciunt, odio maiores perspiciatis praesentium neque temporibus deserunt pariatur, omnis fuga sequi iure, commodi maxime laborum optio? Corrupti!</p>
  //     <button onClick={props.closeDialog} style={dialogCloseButtonStyles}>X</button>
  //   </div>
  // );
  let dialog = <div>
    {props.recipes.map(x => {
      return (
        <div
          style={dialogStyles}
          key={uuid.v4()}
        >
          <p>{x.recipe.label}</p>
          <p>Source: {x.recipe.source}</p>
          <button onClick={props.closeDialog} style={dialogCloseButtonStyles}>X</button>
        </div>
      )
    })

    }
  </div>

  if (!props.isOpen) {
    dialog = null;
  }
  return (
    <div>{dialog}</div>
  )
}

export default Dialog