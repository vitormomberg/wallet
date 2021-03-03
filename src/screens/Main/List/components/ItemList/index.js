import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { TYPES } from '~/constants/types';
import { formatCurrency } from '~/helpers/currency';
import { colors } from '~/styles/index';

function ItemList({ type, date, value, id }) {
  const { navigate } = useNavigation();
  const dateFormatted = dayjs(date || new Date()).format('DD/MM/YYYY - HH:mm');
  const typeFormatted = TYPES[type] || 'Sem informação';
  const valueFormatted = formatCurrency(value || 0);

  return (
    <S.Touch onPress={() => navigate('Form', { id })}>
      <S.ContainerItemList>
        <S.WrapperIcon bgColor={typeFormatted.COLOR}>
          <FontAwesome5Icon
            name={typeFormatted.ICON}
            size={16}
            color={colors.white}
            solid
          />
        </S.WrapperIcon>
        <S.WrapperInfo>
          <S.Label>{typeFormatted.LABEL}</S.Label>
          <S.SubLabel>{dateFormatted}</S.SubLabel>
        </S.WrapperInfo>
        <S.WrapperValue>
          <S.Value>{valueFormatted}</S.Value>
        </S.WrapperValue>
      </S.ContainerItemList>
    </S.Touch>
  );
}

ItemList.propTypes = {
  type: PropTypes.oneOf(Object.keys(TYPES)).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  value: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ItemList;
