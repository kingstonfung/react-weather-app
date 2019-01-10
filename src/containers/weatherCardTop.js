/*
This is a 'function component' that renders the top face of the weather card. It will get information
from the <App> component, and distribute it among other smaller components.

It is often called a "container" because it contains many smaller components and have very little
work to do on its own. Although this is an informal name, but it often help developers to distinguish
the purpose between a 'component' vs a 'container'.
*/

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