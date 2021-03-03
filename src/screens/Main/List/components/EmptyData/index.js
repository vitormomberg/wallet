import React from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import { colors } from '~/styles';
import * as S from './styles';

function EmptyData() {
  return (
    <S.Container>
      <FontAwesome5Icon
        name="sad-tear"
        size={80}
        color={colors.lightGrey}
        solid
      />
      <S.Label>Sem investimentos</S.Label>
    </S.Container>
  );
}

export default EmptyData;
