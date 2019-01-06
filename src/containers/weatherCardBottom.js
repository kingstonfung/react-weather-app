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
