import React from 'react';

const check = (i) => {
  if (i === 5) return <option value='' selected disabled hidden key={i}></option>
  if (i > 5) return <option name='passwordLength' value={i} key={i}>{i}</option>
}

const Options = () => {
  const lengthOptions = Array(16).fill(null);

  return ( lengthOptions.map((_el, i) => check(i)))
}

export default Options;