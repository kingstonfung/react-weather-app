import React from 'react';

import ForecastItem from '../../components/forecastItem/forecastItem';

export default (forecast) => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  let dailyForecasts = [];

  dailyForecasts = forecast.map((dayInfo, index) => {
    const iconType = dayInfo.weather[0].main.toLowerCase();
    return (
      <ForecastItem
        key={index}
        icon={`wi-wu-${iconType}`}
        high={Math.round(dayInfo.temp.max)}
        low={Math.round(dayInfo.temp.min)}
        dayOfWeek={days[((new Date().getDay() + index) % 7)]}>
      </ForecastItem>
    );
  });

  return dailyForecasts;
}