import React from 'react';
import PropTypes from 'prop-types';

const PASSWORD_LENGTH = 16;
const LENGTH_OPT = Array(PASSWORD_LENGTH).fill(null);
const START_VALUE = 5;

const disabledOption = (i) => (
  <option defaultValue aria-label="Default opt" hidden key={ i } />);

const normalOption = (i) => <option value={ i } key={ i }>{i}</option>;

const check = (i) => (i === START_VALUE ? disabledOption(i) : normalOption(i));

const options = () => (LENGTH_OPT.map((_el, i) => (i >= START_VALUE ? check(i) : '')));

const Select = ({ handleChange }) => (
  <div className="select-container">
    <label htmlFor="pwd-length">
      Length:
      <select
        id="pwd-length"
        onChange={ (e) => handleChange(e) }
        className="passwordLength"
        name="passwordLength"
      >
        { options() }
      </select>
    </label>
  </div>
);

export default Select;

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
