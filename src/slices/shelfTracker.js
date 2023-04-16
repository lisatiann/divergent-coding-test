import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentZone: 'zone1',
  zones: {
    zone1: {
      shelves: [],
    },
  },
};

// const currentZone = initialState.currentZone.name;

// figure out how to max at 10 shelves

const shelfTrackerSlice = createSlice({
  name: 'shelfTracker',
  initialState,
  reducers: {
    // Changes the current zone and creates a new zone if it doesn't exist.
    changeZone(state, action) {
      console.log(action)
      state.currentZone = action.payload;

      if (!state.zones[action.payload]) {
        state.zones[action.payload] = { shelves: [] };
      }
    },
    // add delete zone functionality
    deleteZone(state) {
      const { currentZone } = state;

      delete state.zones[currentZone];
    },
    // Adds a new shelf to the current zone if it has less than 10 shelves
    addShelf(state) {
      const { currentZone } = state;
      if (state.zones[currentZone].shelves.length < 10) {
        state.zones[currentZone].shelves.push('');
      }
    },
    // Removes the last shelf from the current zone.
    deleteShelf(state) {
      const { currentZone } = state;

      state.zones[currentZone].shelves.pop();
    },
    // Changes the name of a shelf in the current zone.
    addShelfName(state, { payload: { index, input } }) {
      const { currentZone, zones } = state;
      zones[currentZone].shelves[index] = input;
    },
    // resetShelves(state) {
    //   state.counter = 0;
    // },
  },
});

export const {
  changeZone,
  deleteZone,
  addShelf,
  deleteShelf,
  addShelfName,
} = shelfTrackerSlice.actions;

export default shelfTrackerSlice.reducer;
