import React from 'react';

import './temperature.scss';

export default (props) => {
  return (
    <div className='cardTemperature'>
      {props.children}
    </div>
  );
};
