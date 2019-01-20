import React from 'react';

import CityNameTitle from '../components/cityNameTitle';
import Temperature from '../components/temperature';
import CurrentCondition from '../components/currentCondition';

class WeatherCard extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='cardUpperPortion'>
          <CityNameTitle>{this.props.city}</CityNameTitle>
          <Temperature>{this.props.temperature}</Temperature>
          <CurrentCondition>{this.props.currentCondition}</CurrentCondition>
        </div>
      </div>
    );
  }
};

export default WeatherCard;
