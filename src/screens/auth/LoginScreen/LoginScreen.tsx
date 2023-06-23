import React from 'react';

import {Controller, useForm} from 'react-hook-form';

import {AuthNativeStackScreenProps} from '../../../@types/AuthNativeStackScreenProps';

import {Text} from './../../../components/Text';
import {Button} from './../../../components/Button';
import {TextInput} from './../../../components/TextInput/TextInput';
import {ScreenWrapper} from '../../../components/ScreenWrapper/ScreenWrapper';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';

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

      <Controller
        control={control}
        name="email"
        rules={{
          required: 'E-mail obrigatório',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'E-mail inválido',
          },
        }}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{
              mb: 's20',
            }}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Senha obrigatória',
          minLength: {
            value: 6,
            message: 'Senha deve conter pelo menos 6 dígitos',
          },
        }}
        render={({field, fieldState}) => (
          <PasswordInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Senha"
            placeholder="Digite sua senha"
            boxProps={{
              mb: 's10',
            }}
          />
        )}
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
