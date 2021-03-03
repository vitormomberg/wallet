import { Alert } from 'react-native';
import React, { useRef, useState } from 'react';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import * as investmentsModel from '~/models/investments';
import { TYPES } from '~/constants/types';
import { formatCurrency } from '~/helpers/currency';
import { selectorInvestmentsById } from '~/reducers/investments/selectors';

import ButtonWithIcon from '~/components/Buttons/ButtonWithIcon';
import Input from '~/components/Form/Input/index';
import InputDateTime from '~/components/Form/InputDateTime/index';
import InputRadio from '~/components/Form/InputRadio/index';

import { colors } from '~/styles/index';

import { validationSchema } from './validate';
import * as S from './styles';

function Form() {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const user = useSelector((state) => state.user);
  const valueInputRef = useRef(null);
  const [inputSelected, setInputSelected] = useState('');
  const [loading, setLoading] = useState(false);

  const id = params?.id ?? null;
  const investment = useSelector((state) => selectorInvestmentsById(state, id));

  async function onSubmit(form) {
    try {
      setLoading(true);
      const payload = form;
      delete payload.valueMasked;
      await investmentsModel.add({ ...payload, uid: user.uid });
      navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'Ocorreu algum erro, tente novamente mais tarde', [
        { text: 'OK' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  async function onRemove() {
    try {
      setLoading(true);
      await investmentsModel.delete(id);
      navigate('Home');
    } catch (error) {
      Alert.alert('Ops', 'Ocorreu algum erro, tente novamente mais tarde', [
        { text: 'OK' },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const radioOptions = Object.keys(TYPES).map((item) => ({
    label: TYPES[item].LABEL,
    value: item,
  }));

  const {
    values,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      value: investment.value || 0,
      valueMasked: investment.value ? formatCurrency(investment.value) : '',
      date: investment.date || new Date(),
      type: investment.type || radioOptions[0].value,
    },
    onSubmit,
    validationSchema,
  });

  const buttonsProps = {
    add: {
      onPress: handleSubmit,
      icon: {
        color: colors.primary,
        name: 'plus',
      },
      label: 'Cadastrar',
    },
    delete: {
      onPress: () =>
        Alert.alert(
          'Confirme',
          'Tem certeza que deseja excluir esse investimento?',
          [{ text: 'Não' }, { text: 'Sim', onPress: onRemove }]
        ),
      icon: {
        color: colors.red,
        name: 'times',
      },
      label: 'Remover',
    },
  };

  const button = !id ? buttonsProps.add : buttonsProps.delete;

  return (
    <S.Container>
      <S.Content>
        <S.Label>Preencha os campos para cadastrar um investimento</S.Label>

        <S.WrapperInput>
          <Input
            editable={!id}
            ref={valueInputRef}
            value={values.valueMasked}
            label="Valor"
            icon="dollar-sign"
            error={touched.value && errors.value}
            typeMask="money"
            placeholder="Digite o valor"
            keyboardType="number-pad"
            handleChangeText={(valueMasked, valueRaw) => {
              setFieldValue('value', valueRaw);
              setFieldValue('valueMasked', valueMasked);
            }}
            onBlur={() => {
              setFieldTouched('value');
              setInputSelected('');
            }}
            onFocus={() => setInputSelected('value')}
            focused={inputSelected === 'value'}
          />
        </S.WrapperInput>
        <S.WrapperInput>
          <InputRadio
            label="Tipo"
            options={radioOptions}
            onChange={(value) => setFieldValue('type', value)}
            value={values.type}
          />
        </S.WrapperInput>

        <S.WrapperInput>
          <InputDateTime
            valueFormatted={dayjs(values.date).format('DD/MM/YYYY - HH:mm')}
            value={values.date}
            label="Data"
            error={touched.date && errors.date}
            onChange={(value) => setFieldValue('date', value)}
            onBlur={() => setFieldTouched('date')}
          />
        </S.WrapperInput>
      </S.Content>
      <S.WrapperButton>
        <ButtonWithIcon
          loading={loading}
          onPress={button.onPress}
          icon={button.icon}
          label={button.label}
        />
      </S.WrapperButton>
    </S.Container>
  );
}

export default Form;
