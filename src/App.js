import './App.css';
import React, {useState} from 'react';
import Person from "./components/Person";

function App() {

  const [personsSate, setpersonState] = useState({
      persons: [
          {id: 1, name: "Tobi", age: 25},
          {id: 2, name: "Wyld", age: 55},
          {id: 3, name: "Angi", age: 5}
      ]
  });

  const [showPersonsState, setshowPersonsState] = useState(
      {
          showPersons: true
      }
  );

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

  const nameChangeHandler = (event, id) => {
      // Get the index of the person
      const personIndex = personsSate.persons.findIndex(p => {return p.id === id});
      // get the person with the index
      const person = {...personsSate.persons[personIndex]};
      // update the persons Name
      person.name = event.target.value;
      const persons = [...personsSate.persons];
      persons[personIndex] = person;

      // set new finale state
      setpersonState({persons: persons});

  };

  const togglePersonHandler = () => {
      const doesShow = showPersonsState.showPersons;
      setshowPersonsState({showPersons: !doesShow});
  };

  const deletePersonHandler = (personIndex) => {
        //const persons = personsSate.persons.slice();
        const persons = [...personsSate.persons];
        persons.splice(personIndex,1);
        setpersonState({persons: persons});
  };

  const style = {
     backgroundColor: "white",
     font: "inherit",
     border: "1px solid blue",
     padding: "8px",
     cursor: "pointer"
  };

  let persons = null;
  if (showPersonsState.showPersons) {
      persons = (
          <div>
              {personsSate.persons.map((person, index) => {
              return (<Person
              name = {person.name}
              age ={person.age}
              click = {deletePersonHandler.bind(this, index)}
              // key = person.id --> if an element has an id
              key = {person.id}
              changed = {(event) => nameChangeHandler(event, person.id)}
              />)
              })}
          </div>
      );
  };

  return (
    <div className="App">
      <h1>Ich bin eine Überschrift</h1>
      <button onClick={togglePersonHandler}
      style={style}>Toggle Persons</button>
      {persons}

    </div>
  );
}

export default App;
