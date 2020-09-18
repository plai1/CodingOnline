import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [ personState, setPersonState ] = useState({
      person: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 },
        { name: 'Phillip', age: 19 }
      ],
    });

    const [hobbies, setHobbies] = useState({hobbies: "Video Game"});

    console.log(personState, hobbies);

    const switchNameHandler = () => {
      //DON"T DO THIS: this.state.person[0].name = 'Maximilian';
      //code won't allow you to mutate object like this
      //use useState()'s second output within a function to use it
      setPersonState({
        person: [
          { name: 'Maximilian', age: 28 },
          { name: 'Manu', age: 29},
          { name: 'Stephanie', age: 27 },
          { name: 'Phillip', age: 20 }
        ]
      })
    };

      //don't put parenthese after switchNameHandler unless you want to execute it after it compiles
    return (
      <div className="App">
        <h1>Hi, I'am a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>

        <Person
          name={personState.person[0].name}
          age={personState.person[0].age}
        />
        <Person name={personState.person[3].name} age={personState.person[3].age}>
          Hobbies: {personState.hobbies}
        </Person>
        <Person
          name="Clarise"
          age="21"
        />
      </div>
    );
    //Similar to:
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I'm a React App'));
}

export default app;
