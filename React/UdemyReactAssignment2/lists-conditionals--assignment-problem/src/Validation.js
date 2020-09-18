import React from 'react';



const Validation = (props) => {
  let validationMessage = 'Text is Too Short';

  if (props.inputLength >= 5){
    validationMessage = 'Text is Long Enough';
  }

  return(
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default Validation;
