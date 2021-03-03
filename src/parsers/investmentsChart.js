import { TYPES } from '~/constants/types';

export function parserInvestmentsCharts(data) {
  const [totalFixed, totalVariable] = Object.keys(TYPES).map((key) =>
    data.reduce(
      (accumulator, currentValue) =>
        currentValue.type === key
          ? currentValue.value + accumulator
          : accumulator,
      0
    )
  );

  return { totalFixed, totalVariable };
}
