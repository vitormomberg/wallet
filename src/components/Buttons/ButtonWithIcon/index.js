import React from 'react';
import PropTypes from 'prop-types';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Loading from '~/components/Loading';

import * as S from './styles';

function ButtonWithIcon({ onPress, icon, label, loading }) {
  function renderContent() {
    if (loading) {
      return <Loading />;
    }

    return (
      <>
        <S.WrapperIcon>
          <IconFontAwesome5 name={icon.name} color={icon.color} size={40} />
        </S.WrapperIcon>
        <S.TouchLabel>{label}</S.TouchLabel>
      </>
    );
  }
  return (
    <S.Touch onPress={onPress}>
      <S.TouchContent bgColor={icon.color}>{renderContent()}</S.TouchContent>
    </S.Touch>
  );
}

ButtonWithIcon.defaultProps = {
  loading: false,
};

ButtonWithIcon.propTypes = {
  loading: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default ButtonWithIcon;
