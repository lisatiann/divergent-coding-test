/* eslint-disable no-plusplus */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeZone, deleteZone } from '../slices/shelfTracker';

function ZoneSelector() {
  const currentZone = useSelector((state) => state.currentZone);
  const dispatch = useDispatch();

  // Render an option element for each zone number (total of 12)
  const options = [];
  for (let i = 1; i <= 12; i++) {
    options.push(
      <option key={i} value={`zone${i}`}>
        {i}
      </option>,
    );
  }

  return (
    <div>
      Select a zone:
      <select
        name="selectList"
        id="selectList"
        value={currentZone}
        style={{ marginBottom: '20px' }}
        // onChange listening to dispatch changeZone with selected zone as payload
        onChange={(e) => dispatch(changeZone(e.target.value))}
      >
        {options}
      </select>
      <button type="button" onClick={() => dispatch(deleteZone())}>Delete Zone</button>
    </div>
  );
}

export default ZoneSelector;
