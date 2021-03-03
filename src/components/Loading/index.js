import React from 'react';
import PropTypes from 'prop-types';

import { colors } from '~/styles';

import * as S from './styles';

function Loading({ color }) {
  return (
    <S.Container>
      <S.Loading color={color} />
    </S.Container>
  );
}

Loading.defaultProps = {
  color: colors.white,
};

Loading.propTypes = {
  color: PropTypes.string,
};

export default Loading;
