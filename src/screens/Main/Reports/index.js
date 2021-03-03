import React, { useState, useCallback } from 'react';
import { RefreshControl, processColor } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { fetchInvestments } from '~/controllers/investments/fetch';

import { TYPES } from '~/constants/types';

import { colors } from '~/styles';

import * as S from './styles';

function Reports() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const investments = useSelector((state) => state.investments);
  const [refreshing, setRefreshing] = useState(false);

  const getInvestments = useCallback(async () => {
    dispatch(fetchInvestments(user.uid));

    setRefreshing(false);
  }, [user, dispatch]);

  const data = {
    dataSets: [
      {
        values: [
          {
            value: investments.chart.totalFixed,
            label: TYPES.RENDA_VARIAVEL.LABEL,
          },
          {
            value: investments.chart.totalVariable,
            label: TYPES.RENDA_FIXA.LABEL,
          },
        ],
        label: 'Gráfico',
        config: {
          colors: [processColor(colors.primary), processColor(colors.blue)],
          valueTextSize: 16,
          valueTextColor: processColor(colors.white),
          sliceSpace: 1,
          selectionShift: 8,
          valueFormatter: "#.#'%'",
          valueLineColor: processColor(colors.white),
          valueLinePart1Length: 0.5,
        },
      },
    ],
  };

  return (
    <S.Container
      refreshControl={
        <RefreshControl
          colors={[colors.primary]}
          onRefresh={() => {
            setRefreshing(true);
            getInvestments();
          }}
          refreshing={refreshing}
        />
      }
    >
      <S.Label>Relatório de Investimentos</S.Label>
      <S.Chart
        chartBackgroundColor={processColor(colors.white)}
        chartDescription={{
          text: '',
        }}
        data={data}
        legend={{
          enabled: false,
        }}
        extraOffsets={{ left: 5, top: 5, right: 5, bottom: 5 }}
        entryLabelColor={processColor(colors.white)}
        entryLabelTextSize={12}
        drawEntryLabels
        rotationEnabled={false}
        rotationAngle={45}
        usePercentValues
        centerTextRadiusPercent={100}
        holeRadius={40}
        holeColor={processColor(colors.white)}
        transparentCircleRadius={48}
        transparentCircleColor={processColor(colors.lightGrey)}
      />
      <S.WrapperLegend>
        <S.WrapperItemLegend>
          <S.Border color={TYPES.RENDA_VARIAVEL.COLOR} />
          <S.LabelLegend>{TYPES.RENDA_VARIAVEL.LABEL}</S.LabelLegend>
        </S.WrapperItemLegend>
        <S.WrapperItemLegend>
          <S.Border color={TYPES.RENDA_FIXA.COLOR} />
          <S.LabelLegend>{TYPES.RENDA_FIXA.LABEL}</S.LabelLegend>
        </S.WrapperItemLegend>
      </S.WrapperLegend>
    </S.Container>
  );
}

export default Reports;
