import React from 'react';

const LENGTH_OPTIONS = Array(16).fill(null);
const START_VALUE = 5;

const disabledOption = (i) => <option value='' defaultValue hidden key={i} />
const normalOption = (i) => <option value={i} key={i}>{i}</option>

const check = (i) => i === START_VALUE ? disabledOption(i) : normalOption(i);

const Options = () => (LENGTH_OPTIONS.map((_el, i) => i >= START_VALUE ? check(i) : ''));

export default Options;