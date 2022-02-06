import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import Options from '../components/Options.js'
import http from '../services/api';

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
    await navigator.clipboard.writeText(password);
    setisCopied(true);
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
    <div className='child'>
      <h1 className='title'>Make your password!</h1>
      <div className='form'>
        <form>
          <div>
            <p>Password Length:
              <select
                onChange= { handleChange }
                className='passwordLength' name="passwordLength"
              >
                <Options/>
              </select>
            </p>
          </div>
          <div className='checkbox'>
            <Input
              handleChange= { handleChange }
              type="checkbox"
              className="checks"
            />
          </div>
          <button
            type="button"
            disabled={ button }
            onClick={ () => sendPasswordOptions() }
          >
            Make your password!
          </button>
        </form>
        <div>
          <input 
            type="text"
            className='ready-password-input'
            value={ password }
            readOnly
            placeholder='Your password will appear here'
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