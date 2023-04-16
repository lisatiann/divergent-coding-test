// import { changeZone } from '../../slices/shelfTracker';

// describe('changeZone', () => {
//   it('should update the currentZone and add a new zone if it does not exist', () => {
//     const initialState = {
//       currentZone: 'zone1',
//       zones: {
//         zone1: {
//           shelves: [],
//         },
//       },
//     };

//     const action = changeZone('zone2');
//     const newState = shelfTrackerSlice.reducer(initialState, action);

//     expect(newState.currentZone).toEqual('zone2');
//     expect(newState.zones).toHaveProperty('zone2');
//   });

//   it('should not add a new zone if it already exists', () => {
//     const initialState = {
//       currentZone: 'zone1',
//       zones: {
//         zone1: {
//           shelves: [],
//         },
//         zone2: {
//           shelves: [],
//         },
//       },
//     };

//     const action = changeZone('zone2');
//     const newState = shelfTracker(initialState, action);

//     expect(newState.currentZone).toEqual('zone2');
//     expect(newState.zones).toHaveProperty('zone2');
//     expect(Object.keys(newState.zones).length).toEqual(2);
//   });
// });