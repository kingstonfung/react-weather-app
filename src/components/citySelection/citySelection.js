import React from 'react';

import './citySelection.scss';

export default (props) => {
  return (
    <header>
      <label htmlFor="citySelection">Select a city:</label>
      <div className="selectDropdown">
        <select id="citySelection" onChange={props.selectionChangeHandler}>
          <option value='edmonton'>Edmonton</option>
          <option value='vancouver'>Vancouver</option>
          <option value='calgary'>Calgary</option>
          <option value='montreal'>Montreal</option>
          <option value='toronto'>Toronto</option>
        </select>
      </div>
    </header>
  );
};
