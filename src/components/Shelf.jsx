import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addShelfName } from '../slices/shelfTracker';

function Shelf(props) {
  const currentZone = useSelector((state) => state.currentZone);
  const zones = useSelector((state) => state.zones);
  const shelfNames = useSelector((state) => state.zones[currentZone].shelves);
  const dispatch = useDispatch();

  // check if shelf name is unique. if not, alert. if yes, dispatch
  const handleAddShelfName = (e) => {
    const existingShelfNames = Object.values(zones)
      .flatMap((zone) => zone.shelves)
      .filter((shelfName) => shelfName !== shelfNames[props.id]);

    if (existingShelfNames.includes(e.target.value)) {
      alert('Shelf name must be unique');
      return;
    }

    dispatch(addShelfName({ input: e.target.value, index: props.id }));
  };

  return (
    <div>
      <label htmlFor={`shelf-${props.id}`}>
        Shelf name:
        <input
          type="text"
          id={props.id}
          placeholder="enter here..."
        // display current shelf name
          value={shelfNames[props.id] || ''}
          style={{ marginBottom: '15px' }}
          onChange={handleAddShelfName}
          required
        />
      </label>
    </div>
  );
}

export default Shelf;
