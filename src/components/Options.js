import React from 'react';

const check = (i) => {
  if (i === 5) return <option value='' selected disabled hidden key={i}></option>
  if (i >= 5) return <option value={i} key={i}>{i}</option>
}

const Options = () => {
  const lengthOptions = Array(16).fill(null);
  <option value="" selected disabled hidden>Choose here</option>

  return ( lengthOptions.map((_el, i) => check(i)))
}

export default Options;

// >= 5 ? <option value={i} key={i}>{i}</option> : ''))
// i === 5 
// ? <option value='' selected disabled hidden key={i}>Choose here</option> 
// : ''