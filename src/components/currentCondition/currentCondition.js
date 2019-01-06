import React from 'react';

import './currentCondition.scss';

export default (props) => {
  return (
    <div className='currentCondition'>
      {props.children}
    </div>
  );
};
