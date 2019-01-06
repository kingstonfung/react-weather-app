import React from 'react';

import Temperature from '../temperature/temperature';

import './forecastItem.scss';

export default (props) => {
  return (
    <li className='forecastItem'>
      <span className={`forecastIcon wi ${props.icon}`}></span>
      <Temperature>{props.high}</Temperature>
      <Temperature>{props.low}</Temperature>
      <p className='forecastDay'>{props.dayOfWeek}</p>
    </li>
  );
};
