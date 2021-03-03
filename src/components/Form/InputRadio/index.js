import React from 'react';
import PropTypes from 'prop-types';
import RadioForm from 'react-native-simple-radio-button';

import * as S from './styles';

function InputRadio({ options, onChange, value, label }) {
  return (
    <RadioForm animation>
      <S.Label>{label}</S.Label>
      {options.map((option, i) => (
        <S.RadioButton labelHorizontal key={option.value}>
          <S.RadioInput
            obj={option}
            index={i}
            isSelected={value === option.value}
            onPress={onChange}
          />
          <S.RadioLabel
            index={i}
            obj={option}
            labelHorizontal
            onPress={onChange}
          />
        </S.RadioButton>
      ))}
    </RadioForm>
  );
}

InputRadio.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default InputRadio;
