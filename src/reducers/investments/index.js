import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  chart: {
    totalFixed: 0,
    totalVariable: 0,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setInvestments: (state, action) => ({
      ...state,
      list: action.payload.list,
      chart: {
        totalFixed: action.payload.chart.totalFixed,
        totalVariable: action.payload.chart.totalVariable,
      },
    }),
  },
});

export const { actions } = userSlice;

export default userSlice.reducer;
