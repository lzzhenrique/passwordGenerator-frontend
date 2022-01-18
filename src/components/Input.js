import React from 'react';

const options = ['Numbers', 'Lowercase', 'Simbols', 'Uppercase'];

const Input = ({ type, className }) => {
  return options.map((option) => {
    return(
      <div className={className}>
        <label htmlFor={option}>
          {`${option}`}
          <input 
            id={option}
            type={type}
            name={option}></input>
        </label>
      </div>
    );
  });
};


export default Input;