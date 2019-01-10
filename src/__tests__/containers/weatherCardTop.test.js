import React from 'react';
import ReactDOM from 'react-dom';

import WeatherCardTop from '../../containers/WeatherCardTop';

describe('WeatherCard component...', () => {
  const staticWeatherCardBottom =
    <WeatherCardTop
      temperature="10"
      currentCondition="rain"
      city="Somewhere"
      cityImage="example.com/testimage.jpg"
    />;

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should create the background image inline style correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    expect(div.firstChild.getAttribute('style')).toBe('background-image: url(example.com/testimage.jpg);');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const div = document.createElement('div');
    ReactDOM.render(staticWeatherCardBottom, div);
    expect(div).toMatchSnapshot();
    ReactDOM.unmountComponentAtNode(div);
  });
});