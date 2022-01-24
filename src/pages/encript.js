import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import Options from '../components/Options.js'

export default function Encript() {
  const [passwordOptions, setpasswordOptions] = useState({
    passwordLength: null,
    numbers: false,
    simbols: false,
    uppercase: false,
    lowercase: false,
  });
  const [button, setButton] = useState(true);
  

  function handleChange({ target: { name, type, checked, value: Value } }) {
    const value = type === 'checkbox' ? checked : Value
    setpasswordOptions({ ...passwordOptions, [name]: value});
  }

  useEffect(() => {
    const { 
      numbers,
      lowercase,
      simbols,
      uppercase,
      passwordLength
    } = passwordOptions;
  
    if(passwordLength && (numbers || lowercase || simbols || uppercase)) {
      return setButton(false)
    }
    if(!numbers && !lowercase && !simbols && !uppercase) {
      return setButton(true)
    }
  }, [passwordOptions]);

  return (
    <div className='child'>
      <h1 className='title'>Gere sua senha!</h1>
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
              onChange= { (e) => handleChange(e) }
              type="checkbox"
              className="checks"
            />
          </div>
          <button
            type="button"
            disabled={button}
          >
            Gerar senha!
          </button>
        </form>
    </div>
      </div>
  )
}