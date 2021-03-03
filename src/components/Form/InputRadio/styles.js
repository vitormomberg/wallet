import styled from 'styled-components';
import {
  RadioButton as RadioBtn,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

import { colors } from '~/styles';

export const RadioButton = styled(RadioBtn).attrs({})`
  margin-top: 8px;
`;

export const RadioInput = styled(RadioButtonInput).attrs((props) => ({
  borderWidth: 2,
  buttonInnerColor: colors.primary,
  buttonOuterColor: props.isSelected ? colors.primary : colors.darkGrey,
  buttonSize: 24,
  buttonOuterSize: 32,
}))``;

export const RadioLabel = styled(RadioButtonLabel).attrs({
  labelStyle: { fontSize: 16, color: colors.darkGrey },
})``;

export const Label = styled.Text`
  font-size: 13px;
  color: ${({ color }) => color || colors.darkGrey};
  margin-bottom: 8px;
`;
