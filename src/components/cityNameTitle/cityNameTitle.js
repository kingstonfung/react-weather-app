import React from 'react';

import './cityNameTitle.scss';

export default (props) => {
  return (
    <h2 className='cityNameTitle'>
      {props.children}
    </h2>
  );
};
