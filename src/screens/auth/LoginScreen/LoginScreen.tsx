import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {AuthNativeStackScreenProps} from '@types';
import {useForm} from 'react-hook-form';

import {
  Text,
  Button,
  ScreenWrapper,
  FormTextInput,
  FormPasswordInput,
} from '@components';

import {loginFormSchema, LoginFormSchema} from './loginFormSchema';

export function LoginScreen({
  navigation,
}: AuthNativeStackScreenProps<'LoginScreen'>) {
  const {control, formState, handleSubmit} = useForm<LoginFormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loginFormSchema),
  });

  function handleLogin(data: LoginFormSchema) {}

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
