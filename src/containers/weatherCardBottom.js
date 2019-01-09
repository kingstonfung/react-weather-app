/*
This is a 'function component' that renders the bottom portion of the weather card. It is only
visible if the css class "isActive" is set in the <div>. This 

This container brings in the logic from `generateForecast`. During the render cycle, it will step
through its data (forecasts) and generate the forecast item within the <ul> block.
*/

import React from 'react';

import generateForecasts from './helpers/generateForecast';

import './weatherCardBottom.scss';

export default (props) => {
  return (
    <div className='cardBottomPortion'>
      <div className='cardDetail'>
        <ul className='forecastsWrapper'>
          {generateForecasts(props.forecast)}
        </ul>
      </div>
    </div>
  );
};
