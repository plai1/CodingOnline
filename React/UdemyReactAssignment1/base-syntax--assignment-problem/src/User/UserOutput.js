import React from 'react';
import './Style.css';

const UserOutput = (props) => {
  return (
    <div className="Style">
      <p>Hello, my username is {props.username}</p>
      <p>I am very happy to meet you!</p>
    </div>
  )
};

export default UserOutput;
