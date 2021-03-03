import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { colors } from '~/styles';
import * as S from './styles';

function InputDateTime(props) {
  const { valueFormatted, value, type, label, error, onChange, onBlur } = props;

  const [show, setShow] = useState(false);

  function onConfirm(valuePicker) {
    setShow(false);
    onChange(valuePicker);
  }

  return (
    <S.Container>
      <S.Label>{label}</S.Label>
      <S.Button onPress={() => setShow(true)}>
        <S.Content>
          <S.WrapperIcon>
            <IconFontAwesome5
              name="calendar"
              size={24}
              color={colors.primary}
              solid
            />
          </S.WrapperIcon>
          <S.Value>{valueFormatted || 'Selecione'}</S.Value>
        </S.Content>
      </S.Button>
      {!!error && <S.Error>{error}</S.Error>}

      <DateTimePicker
        isVisible={show}
        mode="date"
        value={value}
        is24Hour
        display="default"
        onConfirm={onConfirm}
        onCancel={() => {
          onBlur();
          setShow(false);
        }}
        cancelTextIOS="Cancelar"
        confirmTextIOS="Confirmar"
        headerTextIOS={`Escolha a ${type === 'date' ? 'data' : 'hora'}`}
      />
      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}

InputDateTime.defaultProps = {
  label: 'Data',
  type: 'date',
  value: new Date(),
  error: null,
  onChange: () => {},
  onBlur: () => {},
  valueFormatted: 'Selecione',
};

InputDateTime.propTypes = {
  valueFormatted: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  type: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  error: PropTypes.string,
};

export default InputDateTime;
