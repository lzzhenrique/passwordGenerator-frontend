import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import Options from '../components/Options.js'
import http from '../services/api';
import './style/encript.css';

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

  

  function handleChange({ target: { name, type, checked, value } }) {
    const inputValue = type === 'checkbox' ? checked : value;
    
    setpasswordOptions({ ...passwordOptions, [name]: inputValue});
  }

  async function sendPasswordOptions () {
    const { finalPassword } = await http.createPassword(passwordOptions);

    setPassword(finalPassword);
  }

  async function copyToClipboard () {
    if (!password) return;

    await navigator.clipboard.writeText(password);
    setisCopied(true);

    setTimeout(() => setisCopied(false), 1000);
  }

  useEffect(() => {
    const { 
      numbers,
      lower,
      simbols,
      upper,
      passwordLength
    } = passwordOptions;
  
    if(passwordLength && (numbers || lower || simbols || upper)) {
      return setButton(false);
    }
    if(!numbers && !lower && !simbols && !upper) {
      return setButton(true);
    }
  }, [passwordOptions]);

  return (
    <div className='home-container'>
      <div className='form'>
        <form>
          <div className='select-container'>
            <label htmlFor='pwd-length' >
              Length:
              <select
                id='pwd-length'
                onChange= { handleChange }
                className='passwordLength' name="passwordLength"
              >
                <Options/>
              </select>
            </label>
          </div>
          <div className='checkbox-container'>
            <Input
              handleChange= { handleChange }
              type="checkbox"
              className='checkbox'
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
          className='copy-result'
        >
          <input 
            type="text"
            className='ready-password-input'
            value={ password }
            readOnly
            placeholder='New password'
          />
          <button
            type="button"
            className='ready-password-button'
            onClick={ () => copyToClipboard() }
          >
            <span>{ isCopied ? 'Copied!' : 'Copy' }</span>
          </button>
        </div>
      </div>
      </div>
  )
}