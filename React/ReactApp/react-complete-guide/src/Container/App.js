import React, { Component } from 'react';

import Cockpit from '../Cockpit/Cockpit';
import classes from './App.css';
import Persons from'../Persons/Persons';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import AuthContext from '../Context/auth-context';

//import styled from 'styled-components';
// import Radium, {StyleRoot} from 'radium';


//const StyledButton = styled.button`
//  background-color: ${props => props.alt ? 'red' : 'green'};
//  color: white;
//  font: inherit;
//  border: 1px solid blue;
//  padding: 8px;
//  cursor: pointer;

//  &:hover {
//    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//    color: black;
//  }
//`;





class App extends Component {
  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    person: [
      {  id: '1', name: 'Max', age: 28 },
      {  id: '2', name: 'Manu', age: 29 },
      {  id: '3', name: 'Stephanie', age: 26 },
      {  id: '4', name: 'Phillip', age: 19 }
    ],
    hobbies: "Video Game",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  //nameChanged = (event) => {
    //this.setState({
      //person: [
        //{ name: 'Max', age: 28 },
        //{ name: event.target.value , age: 29},
        //{ name: 'Stephanie', age: 26 },
        //{ name: 'Phillip', age: 20 }
      //]
    //})
  //}

  //componentWillMount() {
  //  console.log('[App.js] componentWillMount');
  //}

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUppdate');
    return true;
  }


  //important because it could be when information is gettring receivedf from server
  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex( p => {
      return p.id === id;
    });

    const pers = {
      ...this.state.person[personIndex]
    };
      //DON"T DO THIS: this.state.person[0].name = 'Maximilian';
      //code won't allow you to mutate object like this
    pers.name = event.target.value;

    //spread or slice state array to variable
    const persons = [...this.state.person];
    //assign item at array persons at index (personIndex to person variable containing name change)
    persons[personIndex] = pers;


     this.setState({
       person: persons,
       changeCounter: this.state.changeCounter + 1
     });
  }



  deletePersonHandler = (personIndex) => {
    //acts as pointer
    //const persons = this.state.person;
    const persons = [...this.state.person];
    //deletes state array object with splice
    persons.splice(personIndex, 1);
    //assigns state's array to new array where the object is deleted
    this.setState( {person: persons} )

  }

  //changes state's boolean object from false to true and vice versa
  togglePeronsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  };

  loginHandler= () => {
    this.setState({authenticated: true});
  };


  render() {
    console.log('[App.js] render');

    //vairable that can either be full of JSX code or null
    let people = null;

    //changes data of persons to JSX componenets if state's boolean object is true
    // mapping each object in persons array to JSX <Person> component
    // doesnt have button function because didn't include it in map();
    //
    //can also assign deletePersonHandler with this.deletePersonHandler.bind(this, index)
    if (this.state.showPersons){
      people =(
        <Persons
          persons={this.state.person}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated={this.state.authenticated}
        />
      );
    }

    return (
        <Aux>
          <button
          onClick={() => {
            this.setState({ showCockpit: false });
        }}>
          Remove Cockpit
          </button>
          <AuthContext.Provider
            value={{
              authenticated: this.state.authenticated,
              login: this.loginHandler
            }}
          >
            {this.state.showCockpit ? (
              <Cockpit
                title={this.props.appTitle}
                showPersons={this.state.showPersons}
                personsLength={this.state.person.length}
                persons={this.state.person}
                clicked={this.togglePeronsHandler}
                />
            ) : null}
            {people}
          </AuthContext.Provider>
        </Aux>
      );
    //Similar to:
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I'm a React App'));
  }
}


export default withClass(App, classes.App);

//export default Radium(App);


//tenary expression for conditional content (insefficient way because of how renering updates everything in messy order)
