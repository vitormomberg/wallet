import { Platform } from 'react-native';
import styled, { css } from 'styled-components';
import { colors } from '~/styles';

export const Touch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  margin: 2px;
`;

export const TouchContent = styled.View`
  height: 56px;
  flex-direction: row;
  background-color: ${({ bgColor }) => bgColor || colors.primary};
  border-radius: 100px;
  padding-right: 8px;
  ${Platform.OS === 'android' &&
  css`
    elevation: 5;
  `};
`;

export const TouchLabel = styled.Text`
  flex: 1;
  align-self: center;
  margin: 0 auto;
  color: ${colors.white};
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

export const WrapperIcon = styled.View`
  background-color: ${colors.white};
  align-items: center;
  justify-content: center;
  height: 56px;
  width: 56px;
  padding: 8px;
  border-radius: 100px;
`;
