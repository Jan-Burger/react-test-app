import React from 'react';

const person = (props) => {
  return (
      <div>
        <p>Mein Name ist {props.name} und ich bin {props.age} Jahre alt!</p>
        <p>{props.children}</p>
      </div>
      )
};

export default person;