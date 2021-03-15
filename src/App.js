import './App.css';
import React, {useState} from 'react';
import Person from "./components/Person";

function App() {

  const [personsSate, setpersonState] = useState({
      persons: [
          {name: "Tobi", age: 25},
          {name: "Wyld", age: 55},
          {name: "Angi", age: 5}
      ]
  });

  const switchNameHandler = (newName) => {
      console.log("I have been clicked!")
      console.log(personsSate)

      setpersonState({
          persons: [
              {name: newName, age: 500},
              {name: newName, age: 55},
              {name: newName, age: 5}
          ]
      });
  };

  const nameChangeHandler = (event) => {
      setpersonState({
          persons: [
              {name: "Tobi", age: 25},
              {name: event.target.value, age: 55},
              {name: "Angi", age: 5}
          ]
      });
  };

  const style = {
     backgroundColor: "white",
     font: "inherit",
     border: "1px solid blue",
     padding: "8px",
     cursor: "pointer"
  };

  return (
    <div className="App">
      <h1>Ich bin eine Überschrift</h1>
      <button onClick={switchNameHandler.bind(this, "I am a new name")}
      style={style}>Toggle</button>
      <Person
          name = {personsSate.persons[0].name}
          age ={personsSate.persons[0].age}
      />
      <Person
          name = {personsSate.persons[1].name}
          age ={personsSate.persons[1].age}
          click = {switchNameHandler.bind(this, "I am another person :)")}
          changed = {nameChangeHandler}
      />
      <Person
          name = {personsSate.persons[2].name}
          age ={personsSate.persons[2].age}
      />

    </div>
  );
}

export default App;
