import React from 'react';

import WeatherCardTop from './weatherCardTop';
import WeatherCardBottom from './weatherCardBottom';

class WeatherCard extends React.Component {
  state = {
    backgroundIsActive: false
  };

  onCardClick() {
    this.setState({
      backgroundIsActive: !this.state.backgroundIsActive
    })
  }

  getCardClassNames() {
    let classNames = 'card ';
    if (this.state.backgroundIsActive) {
      classNames += 'isActive';
    }
    return classNames;
  }

  render() {
    return (
      <div className={this.getCardClassNames()} onClick={this.onCardClick.bind(this)}>
        <WeatherCardTop
          temperature={this.props.temperature}
          currentCondition={this.props.currentCondition}
          city={this.props.city}
          cityImage={this.props.cityImage}>
        </WeatherCardTop>
        <WeatherCardBottom
          forecast={this.props.forecast}>
        </WeatherCardBottom>
      </div>
    )
  }
};

export default WeatherCard;
