import React from 'react';
import PropTypes from 'prop-types';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { MaskService } from 'react-native-masked-text';

import { colors } from '~/styles';
import * as S from './styles';

const Input = React.forwardRef((props, ref) => {
  const {
    label,
    handleChangeText,
    value,
    error,
    onBlur,
    placeholder,
    typeMask,
    optionsMask,
    icon,
    focused,
  } = props;

  function onHandleChange(text) {
    let valueMasked = text;
    let valueRaw = '';

    if (typeMask) {
      valueMasked = MaskService.toMask(typeMask, text, optionsMask);
      valueRaw = MaskService.toRawValue(typeMask, text, optionsMask);
    }

    handleChangeText(valueMasked, valueRaw);
  }

  const colorLabel = !focused ? colors.darkGrey : colors.primary;
  const colorHasFocus = !focused ? colors.lightGrey : colors.primary;

  return (
    <S.Container>
      <S.Content>
        <S.Label color={colorLabel}>{label}</S.Label>
        <S.Input
          {...props}
          ref={ref}
          onChangeText={onHandleChange}
          placeholder={placeholder}
          value={value}
          onBlur={onBlur}
          hasIcon={!!icon}
          textAlignVertical="center"
          isFocused={colorHasFocus}
        />
        {!!icon && (
          <S.WrapperIcon>
            <IconFontAwesome5
              name={icon}
              size={24}
              color={colorHasFocus}
              solid
            />
          </S.WrapperIcon>
        )}
      </S.Content>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
});

Input.defaultProps = {
  value: '',
  label: '',
  icon: '',
  error: '',
  placeholder: '',
  keyboardType: 'default',
  typeMask: null,
  optionsMask: {},
  focused: false,
  onBlur: () => {},
};

Input.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
  handleChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  icon: PropTypes.string,
  focused: PropTypes.bool,
  keyboardType: PropTypes.string,
  typeMask: PropTypes.oneOf([
    'credit-card',
    'cpf',
    'cnpj',
    'zip-code',
    'only-numbers',
    'money',
    'cel-phone',
    'datetime',
    'custom',
  ]),
  optionsMask: PropTypes.objectOf(PropTypes.any),
};

export default Input;
