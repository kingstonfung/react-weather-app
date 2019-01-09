import React from 'react';
import ReactDOM from 'react-dom';

import WeatherCardBottom from '../../containers/WeatherCardBottom';

const mockForecastData = [{
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}, {
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}, {
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}, {
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}, {
  "temp": {
    "min": -5.95,
    "max": -1.64,
  },
  "weather": [{
    "main": "Snow",
  }],
}];

describe('WeatherCard component...', () => {
  const staticWeatherCardBottom = <WeatherCardBottom forecast={mockForecastData}/>;

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});