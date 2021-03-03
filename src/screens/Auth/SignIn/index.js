import React, { useCallback, useRef, useState } from 'react';
import { Alert } from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';
import { useFormik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

import errorsFirebaseAuth from '~/constants/errorsFirebaseAuth';

import ButtonWithIcon from '~/components/Buttons/ButtonWithIcon';
import Input from '~/components/Form/Input/index';

import { colors } from '~/styles/index';

import { validationSchema } from './validate';
import * as S from './styles';
import { actions } from '~/reducers/user';

function SignIn() {
  const dispatch = useDispatch();
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const [loading, setLoading] = useState(null);
  const [inputSelected, setInputSelected] = useState('');

  const onSubmitForm = useCallback(
    async ({ email, password }) => {
      try {
        setLoading(true);

        const { user } = await auth().signInWithEmailAndPassword(
          email,
          password
        );

        AsyncStorage.setItem('@uid', user.uid);

        dispatch(actions.setUser({ email, uid: user.uid }));
      } catch (e) {
        Alert.alert(
          'Ops!!!',
          errorsFirebaseAuth[e.code] || 'Usuário inválido',
          [{ text: 'OK' }]
        );
      } finally {
        setLoading(false);
      }
    },
    [dispatch]
  );

  const {
    values,
    errors,
    touched,
    handleSubmit,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: onSubmitForm,
    validationSchema,
  });

  return (
    <S.Container>
      <S.WrapperLogo>
        <IconFontAwesome5
          name="hand-holding-usd"
          size={80}
          color={colors.white}
        />
        <S.Title>Carteira Digital</S.Title>
      </S.WrapperLogo>
      <S.ContainerInputs>
        <S.Label>Bem-vindo a sua carteira digital</S.Label>

        <Input
          ref={emailInputRef}
          value={values.email}
          label="E-mail"
          icon="envelope"
          error={touched.email && errors.email}
          placeholder="Digite seu e-mail"
          keyboardType="email-address"
          handleChangeText={(value) => setFieldValue('email', value)}
          onBlur={() => {
            setFieldTouched('email');
            setInputSelected('');
          }}
          onFocus={() => setInputSelected('email')}
          focused={inputSelected === 'email'}
          onSubmitEditing={() => passwordInputRef.current.focus()}
          returnKeyType="next"
        />

        <Input
          ref={passwordInputRef}
          value={values.password}
          label="Senha"
          icon="lock"
          error={touched.password && errors.password}
          secureTextEntry
          autoCorrect={false}
          placeholder="Digite sua senha"
          keyboardType="default"
          handleChangeText={(value) => setFieldValue('password', value)}
          onBlur={() => {
            setFieldTouched('password');
            setInputSelected('');
          }}
          onFocus={() => setInputSelected('password')}
          onSubmitEditing={handleSubmit}
          returnKeyType="done"
          focused={inputSelected === 'password'}
        />

        <S.WrapperButton>
          <ButtonWithIcon
            loading={loading}
            onPress={handleSubmit}
            icon={{ color: colors.primary, name: 'chevron-right' }}
            label="Entrar"
          />
        </S.WrapperButton>
      </S.ContainerInputs>
    </S.Container>
  );
}

export default SignIn;
