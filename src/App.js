import './App.css';
import React from 'react';
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <h1>Ich bin eine Überschrift</h1>
      <Person name = "Morsche" age = "12"/>
      <Person name = "Kasper" age = "67"/>
      <Person name = "Lünne" age = "13"/>
      <Person name = "Lünne" age = "13">Ich bin props.children</Person>
    </div>
  );
}

export default App;
