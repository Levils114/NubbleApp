import React from 'react';

import {useForm} from 'react-hook-form';

import {AuthNativeStackScreenProps} from '../../../@types/AuthNativeStackScreenProps';

import {Text} from './../../../components/Text';
import {Button} from './../../../components/Button';
import {ScreenWrapper} from '../../../components/ScreenWrapper/ScreenWrapper';
import {FormTextInput} from '../../../components/Form/FormTextInput/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput/FormPasswordInput';

interface LoginFormProps {
  email: string;
  password: string;
}

export function LoginScreen({
  navigation,
}: AuthNativeStackScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function handleLogin(data: LoginFormProps) {
    console.log(data);
  }

  function handleCreateAccount() {
    navigation.navigate('SignUpScreen');
  }

  function handleForgotPassword() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <ScreenWrapper>
      <Text preset="headingLarge">Olá</Text>
      <Text preset="paragraphLarge" mt="s8" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <FormTextInput
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          mb: 's20',
        }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        boxProps={{
          mb: 's10',
        }}
      />

      <Text
        color="primary"
        bold
        preset="paragraphSmall"
        onPress={handleForgotPassword}>
        Esqueci minha senha
      </Text>

      <Button
        text="Entrar"
        mt="s48"
        disabled={!formState.isValid}
        onPress={handleSubmit(handleLogin)}
      />
      <Button
        text="Criar uma conta"
        mt="s12"
        preset="outline"
        onPress={handleCreateAccount}
      />
    </ScreenWrapper>
  );
}
