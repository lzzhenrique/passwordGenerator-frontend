import React from 'react';

const options = ['numbers', 'lowerCase', 'simbols', 'upperCase'];

const formatTitles = (name) => {
  const lowerAll = name.toLowerCase().slice(1);
  const upperFirst = name.charAt(0).toUpperCase();
  
  return `${upperFirst}${lowerAll}`;
}

const Input = ({ type, handleChange, className }) => {
  return options.map((option) => {
    return(
      <label htmlFor={ option }>
        { formatTitles(option) }
        <input
          className={ className }
          id={ option }
          type={ type }
          name={ option }
          onChange={ (e) => handleChange(e) }
        />
      </label>
    );
  });
};


export default Input;