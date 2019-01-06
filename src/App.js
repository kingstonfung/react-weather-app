import React, { Component } from 'react';

import WeatherCard from './containers/weatherCard';
import CitySelection from './components/citySelection/citySelection';

import { getWeatherByCity, getForecastByCity } from './utils/network';

import './App.scss';

const DEFAULT_CITY = 'edmonton';

class App extends Component {
  state = {
    city: '',
    temperature: '',
    currentCondition: '',
    forecast: [],
  };

  changeDisplayCity(city) {
    getWeatherByCity(city).then((response) => {
      this.setState({
        city: response.data.name,
        temperature: Math.round(response.data.main.temp),
        currentCondition: response.data.weather[0].description,
        cityImage: response.data.photo
      })
    });

    getForecastByCity(city).then((response) => {
      this.setState({
        forecast: response.data.list
      })
    });
  }

  componentDidMount() {
    this.changeDisplayCity(DEFAULT_CITY);
  }

  onCitySelectionChanged(event) {
    this.changeDisplayCity(event.target.value);
  }

  render() {
    return (
      <div className="App">
        <CitySelection
          selectionChangeHandler={this.onCitySelectionChanged.bind(this)}>
        </CitySelection>
        <WeatherCard
          city={this.state.city}
          temperature={this.state.temperature}
          currentCondition={this.state.currentCondition}
          cityImage={this.state.cityImage}
          forecast={this.state.forecast}
        >
        </WeatherCard>
      </div>
    );
  }
}

export default App;
