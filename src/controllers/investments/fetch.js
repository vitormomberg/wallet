import * as investmentsModel from '~/models/investments';
import { parserInvestmentsCharts } from '~/parsers/investmentsChart';
import { actions } from '~/reducers/investments';

export function fetchInvestments(uid) {
  return async function middle(dispatch) {
    const invests = await investmentsModel.fetch(uid);
    const { totalFixed, totalVariable } = parserInvestmentsCharts(invests);

    const payload = {
      list: invests,
      chart: {
        totalFixed,
        totalVariable,
      },
    };

    dispatch(actions.setInvestments(payload));
  };
}
export default fetch;
