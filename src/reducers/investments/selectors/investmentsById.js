import { createSelector } from '@reduxjs/toolkit';

const selectorInvestmentsById = createSelector(
  (state) => state.investments.list,
  (_, id) => id,
  (investments, id) => investments?.find((item) => item.id === id) || {}
);

export default selectorInvestmentsById;
