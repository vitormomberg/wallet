import styled from 'styled-components';
import { Platform } from 'react-native';
import { colors } from '~/styles';

export const Container = styled.View`
  padding-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: 13px;
  color: ${({ color }) => color || colors.darkGrey};
  margin-top: 20px;
`;

export const Content = styled.View`
  font-size: 14px;
  color: ${colors.darkGrey};
  background-color: ${colors.white};
  border-bottom-color: ${({ isFocused }) => isFocused || colors.grey};
  border-bottom-width: 1px;
  padding: 8px;
  padding-left: ${({ hasIcon }) => (hasIcon ? `36px` : `8px`)};
  margin: 5px 0;
  height: 48px;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const WrapperIcon = styled.View`
  position: absolute;
  bottom: 12px;
  ${Platform.OS === 'android' && `elevation: 5`}
  width: 36px;
`;

export const Value = styled.Text`
  margin-left: 24px;
  font-size: 14px;
  color: ${colors.darkGrey};
`;

export const Error = styled.Text`
  position: absolute;
  right: 10px;
  bottom: -5px;
  text-align: right;
  color: ${colors.red};
  font-size: 12px;
`;
