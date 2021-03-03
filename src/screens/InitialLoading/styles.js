import styled from 'styled-components';
import { colors } from '~/styles/index';

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

export const WrapperLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: colors.white,
  size: 'large',
})``;
