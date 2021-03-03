import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;

export const Content = styled.ScrollView`
  flex: 1;
  background-color: ${colors.white};
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
  align-items: center;
  justify-content: flex-end;
  padding: 24px;
`;

export const WrapperInput = styled.View`
  margin-top: 20px;
`;
