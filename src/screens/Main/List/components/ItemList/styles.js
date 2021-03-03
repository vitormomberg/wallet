import { Dimensions } from 'react-native';
import styled from 'styled-components';
import { colors } from '~/styles';

const { width } = Dimensions.get('window');

export const Touch = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})``;

export const ContainerItemList = styled.View`
  flex-direction: row;
  padding: 8px;
  height: 64px;
  width: ${width}px;
  border-bottom-width: 1px;
  border-color: ${colors.lightGrey};
  align-items: center;
`;

export const WrapperIcon = styled.View`
  background-color: ${({ bgColor }) => bgColor || colors.primary};
  border-radius: 100px;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const WrapperInfo = styled.View`
  flex: 1;
  margin-left: 8px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.darkGrey};
`;

export const SubLabel = styled.Text`
  font-size: 14px;
  color: ${colors.grey};
`;

export const WrapperValue = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Value = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.darkGrey};
`;
