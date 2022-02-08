import React, { useState, useEffect, useCallback } from 'react';
import Input from '../components/Input';
import Select from '../components/Select';
import http from '../services/api';
import './style/encript.css';

const ONE_SECOND = 1000;

export default function Encript() {
  const [passwordOptions, setpasswordOptions] = useState({
    passwordLength: null,
    numbers: false,
    simbols: false,
    upperCase: false,
    lowerCase: false,
  });
  const [button, setButton] = useState(true);
  const [password, setPassword] = useState('');
  const [isCopied, setisCopied] = useState(false);

  const handleChange = useCallback((event) => {
    const { name, type, checked, value } = event.target;

    const inputValue = type === 'checkbox' ? checked : value;

    setpasswordOptions({ ...passwordOptions, [name]: inputValue });
  }, [passwordOptions]);

  async function sendPasswordOptions() {
    const { finalPassword } = await http.createPassword(passwordOptions);

    setPassword(finalPassword);
  }

  async function copyToClipboard() {
    if (!password) return;

    await navigator.clipboard.writeText(password);
    setisCopied(true);

    setTimeout(() => setisCopied(false), ONE_SECOND);
  }

  useEffect(() => {
    const { passwordLength } = passwordOptions;

    const pwdOptions = Object.values(passwordOptions);
    const atLeastTwo = pwdOptions.filter((optionChecked) => optionChecked === true);

    if (passwordLength && atLeastTwo.length >= 2) return setButton(false);

    return setButton(true);
  }, [passwordOptions]);

  return (
    <div className="home-container">
      <div className="form">
        <form>
          <Select
            handleChange={ handleChange }
          />
          <div className="checkbox-container">
            <Input
              handleChange={ handleChange }
              type="checkbox"
              className="checkbox"
            />
          </div>
          <button
            type="button"
            disabled={ button }
            onClick={ () => sendPasswordOptions() }
          >
            Generate password
          </button>
        </form>
        <div
          className="copy-result"
        >
          <div
            type="text"
            className="ready-password-input"
            value={ password }
            readOnly
          >
            <span
              className="ready-password"
            >
              { password }
            </span>
          </div>
          <button
            type="button"
            className="ready-password-button"
            onClick={ () => copyToClipboard() }
          >
            <span>{ isCopied ? 'Copied!' : 'Copy' }</span>
          </button>
        </div>
      </div>
    </div>
  );
}
