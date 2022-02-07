import React from 'react';
import PropTypes from 'prop-types';

const options = ['numbers', 'lowerCase', 'simbols', 'upperCase'];

const formatTitles = (name) => {
  const lowerAll = name.toLowerCase().slice(1);
  const upperFirst = name.charAt(0).toUpperCase();

  return `${upperFirst}${lowerAll}`;
};

const Input = ({ type, handleChange, className }) => options.map((option) => (
  <label
    htmlFor={ option }
    key={ option }
  >
    { formatTitles(option) }
    <input
      className={ className }
      id={ option }
      type={ type }
      name={ option }
      onChange={ (e) => handleChange(e) }
    />
  </label>
));

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};
