import React from 'react';
import ReactDOM from 'react-dom';

import WeatherCard from '../../containers/weatherCard';

describe('WeatherCard component...', () => {
  const staticWeatherCard = (
    <WeatherCard
      city="somewhere"
      temperature="30"
      currentCondition="clear"
      cityImage="http://example.com/image.jpg"
      forecast={[]}
    />);

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCard, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCard, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});