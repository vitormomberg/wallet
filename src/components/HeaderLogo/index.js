import React from 'react';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { colors } from '~/styles';

import * as S from './styles';

function HeaderLogo() {
  return (
    <S.Container>
      <IconFontAwesome5
        name="hand-holding-usd"
        size={32}
        color={colors.white}
      />
    </S.Container>
  );
}

export default HeaderLogo;
