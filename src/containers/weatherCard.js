/*
This is a standard React component responbile for holding the top & bottom portion of the weather
card. It also relays the click event on the card top, to toggle the active/inactive state which
in return show or hide the forecast (bottom) weather card.

Arguably this component may not be needed if we distribute its parts to the parent and children
components. This approach can be viewed as optional, but I usually prefer better separations
to achieve better code organizations.
*/

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
