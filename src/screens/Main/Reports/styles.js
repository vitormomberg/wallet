import styled from 'styled-components';
import { processColor } from 'react-native';
import { PieChart } from 'react-native-charts-wrapper';
import { colors } from '~/styles';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
  },
})`
  background-color: ${colors.white};
  padding: 24px;
`;

export const Chart = styled(PieChart).attrs({
  styledCenterText: {
    text: 'Investimentos',
    color: processColor(colors.darkGrey),
    size: 14,
  },
})`
  flex: 1.5;
`;

export const WrapperLegend = styled.View`
  flex: 0.5;
`;

export const WrapperItemLegend = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Border = styled.View`
  height: 5px;
  width: 16px;
  background-color: ${({ color }) => color};
`;

export const LabelLegend = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-left: 16px;
`;

export const Label = styled.Text`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;
