import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-end;
  background-color: ${colors.white};
`;

export const ListItems = styled.FlatList``;

export const ButtonAdd = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 56px;
  height: 56px;
  position: absolute;
  bottom: 80px;
  right: 16px;
  background-color: ${colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 100px;
`;

export const ButtonLogout = styled(ButtonAdd)`
  bottom: 16px;
  background-color: ${colors.grey};
`;
