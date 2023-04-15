/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';

function SummaryCard() {
  const zones = useSelector((state) => state.zones);
  const zoneKeys = Object.keys(zones);

  function handleSubmit(e) {
    e.preventDefault();

    // post request sending state's zones in JSON
    fetch('/', {
      method: 'POST',
      body: JSON.stringify({ zones }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json());
  }

  return (
    // map each zone as li and each shelve item as
    <div>
      Warehouse Summary
      <ul>
        {zoneKeys.map((zoneKey) => (
          <li key={zoneKey}>
            {`${zoneKey[0].toUpperCase() + zoneKey.slice(1, 4)} ${zoneKey[zoneKey.length - 1]}`}
            <ul>
              {zones[zoneKey].shelves.map((shelfName, index) => (
                <li key={index}>{shelfName}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <button type="submit">Save Warehouse Configuration</button>
      </form>
    </div>
  );
}

export default SummaryCard;
