import React, { Component } from 'react';

import './master-stylesheet.scss';

import WeatherCard from './containers/weatherCard';

import { getWeatherByCity } from './utils/network';

class App extends Component {
  state = {
    city: '',
    temperature: '',
    currentCondition: '',
  };

  componentDidMount() {
    getWeatherByCity('Toronto')
      .then((response) => {
        console.log(response);
        this.setState({
          city: response.data.name,
          temperature: response.data.main.temp,
          currentCondition: response.data.weather[0].description,
        });
      });
  }

  render() {
    return (
      <div className="App">
        <WeatherCard
          city={this.state.city}
          temperature={Math.round(this.state.temperature)}
          currentCondition={this.state.currentCondition}
        >
        </WeatherCard>
      </div>
    );
  }
}

export default App;
