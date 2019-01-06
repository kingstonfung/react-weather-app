import React from 'react';

import CardTitle from '../components/cityNameTitle/cityNameTitle';
import CardDescription from '../components/currentCondition/currentCondition';
import CardTemperature from '../components/temperature/temperature';

import './weatherCardTop.scss';

export default (props) => {
  return (
    <div className='cardUpperPortion' style={{"backgroundImage": `url(${props.cityImage})`}}>
      <div className='cardInfo'>
        <CardTemperature>
          {props.temperature}
        </CardTemperature>
        <CardDescription>
          {props.currentCondition}
        </CardDescription>
      </div>
      <CardTitle>
        {props.city}
      </CardTitle>
    </div>
  );
}