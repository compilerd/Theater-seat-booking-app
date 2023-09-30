// src/redux/reducers/showsReducer.js

// Define initial state
const initialState = [
  { id: 1, name: "Movie 1" },
  { id: 2, name: "Movie 2" },
  { id: 3, name: "Movie 3" },
  // Add more shows as needed
];

const showsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Handle specific actions related to shows if needed in the future
    default:
      return state;
  }
};

export default showsReducer;
