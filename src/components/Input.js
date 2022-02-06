import React from 'react';

const options = ['numbers', 'lowerCase', 'simbols', 'upperCase'];

const formatTitles = (name) => {
  const lowerAll = name.toLowerCase().slice(1);
  const upperFirst = name.charAt(0).toUpperCase();
  
  return `${upperFirst}${lowerAll}`;
}

const Input = ({ type, className, handleChange }) => {
  return options.map((option) => {
    return(
      <div
        className={ className }
        key={ option }
      >
        <label htmlFor={ option }>
          { formatTitles(option) }
          <input
            id={ option }
            type={ type }
            name={ option }
            onChange={ (e) => handleChange(e) }
          />
        </label>
      </div>
    );
  });
};


export default Input;