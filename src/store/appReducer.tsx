import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  gameState: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
};

const appSlice = createSlice({
  name: 'app',
  initialState: { ...initialState },
  reducers: {
    addRandomTwo: (state) => {
      let randomPosition = {line: Math.floor(Math.random() * 4), column: Math.floor(Math.random() * 4)}
      state.gameState[randomPosition.line][randomPosition.column] = 2;
    }
  },
});

export default appSlice.reducer;
export const { addRandomTwo } = appSlice.actions;
