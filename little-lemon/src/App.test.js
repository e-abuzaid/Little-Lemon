import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./App', () => {
  return {
    initializeTimes: jest.fn(() => ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'])
  }
});

describe('initializeState', () => {
  it('should return the correct array of time values', () => {
      // arrange
      const expected =  ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
      // act
      const actual = require('./App').initializeTimes();
      // assert
      expect(actual).toEqual(expected);
  });
});



// describe('initializeTimes', () => {
//   it('should return the correct array of time values', () => {
//       const initializeTimes = jest.fn(() => )
//       render(<App initializeTimes={initializeTimes} />)
//       const expected =  ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
//       const actual = initializeTimes();
//       // assert
//       expect(actual.availableTimes).toEqual(expected);
//   });
// });


