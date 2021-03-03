import React from 'react';
import { StatusBar } from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { colors } from '~/styles';
import * as S from './styles';

function InitialLoading() {
  return (
    <S.Container>
      <StatusBar animated backgroundColor={colors.primary} />
      <S.WrapperLogo>
        <IconFontAwesome5
          name="hand-holding-usd"
          size={80}
          color={colors.white}
        />
        <S.Title>Carteira Digital</S.Title>
      </S.WrapperLogo>
      <S.WrapperLoading>
        <S.Loading color={colors.white} size="large" />
      </S.WrapperLoading>
    </S.Container>
  );
}

export default InitialLoading;
