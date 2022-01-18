import React, { useState } from 'react';
import Input from '../components/Input';
import Options from '../components/Options.js'

export default function Encript() {
  // const [form, setForm] = useState({
  //   numbers: false,
  //   lower: false,
  //   passwordLength: 5,
  //   simbols: false,
  //   upper: false
  // });
  // const [btnDisable, setBtnDisable] = useState(true);

  return (
    <div className='child'>
      <h1 className='title'>Gere sua senha!</h1>
      <div className='form'>
        <form>
          <div>
            <p>Password Length:
              <select 
                className='passwordLength' name="passwordLength">
                <Options/>
              </select>
            </p>
          </div>
          <div className='checkbox'>
            <Input
              type="checkbox"
              className="checks"
            />
          </div>
          <button
            type="button"
            disabled
          >
            Gerar senha!
          </button>
        </form>
    </div>
      </div>
  )
}