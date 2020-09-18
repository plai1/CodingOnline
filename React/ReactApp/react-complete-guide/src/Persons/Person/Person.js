//This is a component
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import Radium from 'radium';
import classes from './Person.css';
import Aux from '../../hoc/Auxiliary';
import withClass from '../../hoc/withClass';
import AuthContext from '../../Context/auth-context';


//const StyledDiv = styled.div`
//    width: 60%;
///    margin: 16px auto;
//    border: 1px solid #eee;
//    box-shadow: 0 2px 3px #ccc;
//    padding: 16px;
///    text-align: center;
//
//    @media (min-width: 500px) {
//      width: 450px;
//    }
//`;

//
class Person extends Component{
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated);
  }

  render() {
    console.log('[Person.js] rendering...');
    //  const style = {
      //javascripty property name that radium understands
      //changes box of each person component
      //'@media (mid-width: 500px)' : {
      //    width: '450px'
      //}
    //};


    return (
      <Aux>
        {this.context.authenticated ? (
          <p>Authenticated!</p>
        ) : (
          <p>Please log in</p>
        )}

        <p onClick={this.props.click}>
          I'm {this.props.name} and my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.change}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);


//export default Radium(person);

//props.children is anything that is written between <Person></Person>
