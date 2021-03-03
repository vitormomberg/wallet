import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { colors } from '~/styles/index';

const { height } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: ${colors.primary};
`;

export const WrapperLogo = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${colors.white};
  margin-top: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const ContainerInputs = styled.View`
  height: ${height * 0.7}px;
  background-color: ${colors.white};
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 24px;
`;

export const Label = styled.Text`
  color: ${colors.primary};
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  border: 1px solid ${colors.primary};
  border-radius: 8px;
  padding: 8px 16px;
`;

export const WrapperButton = styled.View`
  margin-top: 20px;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;
