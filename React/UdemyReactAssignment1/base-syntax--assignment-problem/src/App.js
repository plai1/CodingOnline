import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    user: [
      {userName: 'Gameadto100g'},
      {userName: 'Alamo9112'},
      {userName: 'Penguin<3'}
    ]
  }

  userChangeHandler = (event) => {
    this.setState({
      user: [
        {userName: 'Gameadto100g'},
        {userName: 'Alamo9112'},
        {userName: event.target.value}
      ]
    })
  }



  render() {
    const style = {
      textAlign: 'center',
      border: '1px solid green',
      backgroundColor: 'orange',
      boxRadius: '20%;'
      //outline: 'none',
      //borderColor: 'green',
      //,
      //fontSize: '16px',
    };

    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <div>
          <span>
          <p >My take on this assignment</p>
          <UserOutput username={this.state.user[0].userName}/>
          <UserOutput username={this.state.user[1].userName}/>
          <UserOutput username={this.state.user[2].userName}></UserOutput>
          <UserInput
            style={style}
            change={this.userChangeHandler}
            username={this.state.user[2].userName}>
          </UserInput>
          </span>
        </div>
      </div>
    );
  }
}



export default App;
