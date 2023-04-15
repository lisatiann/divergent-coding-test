import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addShelf, deleteShelf } from '../slices/shelfTracker';
import Shelf from './Shelf';

function ShelfCard() {
  const currentZone = useSelector((state) => state.currentZone);
  // for delete zone: optional chaining to check if shelves exist, if not, set to empty array
  const shelves = useSelector((state) => state.zones[currentZone]?.shelves) || [];
  const dispatch = useDispatch();

  return (
    <>
      {/* render a shelf conponent for each shelf in shelves array */}
      {shelves?.map((shelf, i) => <Shelf key={i} id={i} />)}
      <button type="button" onClick={() => dispatch(addShelf())}>+ Add a shelf</button>
      {/* delete button only appears when there is at least one shelf */}
      {shelves.length > 0 && (
        <button type="button" onClick={() => dispatch(deleteShelf())}>- Delete a shelf</button>
      )}
    </>
  );
}

export default ShelfCard;
