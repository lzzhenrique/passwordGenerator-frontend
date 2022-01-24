import React from 'react';

const options = ['numbers', 'lowercase', 'simbols', 'uppercase'];

const Input = ({ type, className, onChange }) => {
  return options.map((option) => {
    return(
      <div className={className}>
        <label htmlFor={option}>
          {`${option.charAt(0).toUpperCase() + option.slice(1)}`}
          <input 
            onChange={ (e) => onChange(e) }
            id={option}
            type={type}
            name={option}></input>
        </label>
      </div>
    );
  });
};


export default Input;