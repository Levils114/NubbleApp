/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useValueIsAvailable} from '@infra';
import {useAuthSignUp} from '@modules';
import {useForm} from 'react-hook-form';

import {
  Button,
  ScreenWrapper,
  Text,
  FormTextInput,
  FormPasswordInput,
  ActivityIndicator,
} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {SignUpFormSchema, signUpFormSchema} from './signUpFormSchema';

export function SignUpScreen() {
  const {reset} = useResetNavigationSuccess();

  const {signUp, isLoading} = useAuthSignUp({
    onSuccess: () => {
      reset({
        icon: {
          name: 'checkRound',
          color: 'background',
        },
        title: 'Sua conta foi criada com sucesso!',
        subtitle: 'Agora é só fazer login na nossa plataforma',
      });
    },
  });
  const {control, formState, handleSubmit, watch, getFieldState} =
    useForm<SignUpFormSchema>({
      defaultValues: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      mode: 'onChange',
      resolver: zodResolver(signUpFormSchema),
    });

  const usernameQuery = useValueIsAvailable({
    getFieldState,
    watch,
    valueToInvestigate: 'username',
  });
  const emailValidateQuery = useValueIsAvailable({
    getFieldState,
    watch,
    valueToInvestigate: 'email',
  });

  function onSubmit(data: SignUpFormSchema) {
    signUp(data);
  }

  return (
    <ScreenWrapper canGoBack isScrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <FormTextInput
        control={control}
        name="username"
        label="Seu username"
        errorMessage={
          usernameQuery.isUnavailable ? 'Username indisponível' : undefined
        }
        placeholder="@"
        boxProps={{mb: 's20'}}
        RightComponent={
          usernameQuery.isLoading
            ? () => <ActivityIndicator size={'small'} />
            : undefined
        }
      />

      <FormTextInput
        control={control}
        name="firstName"
        label="Primeiro nome"
        placeholder="Digite seu nome"
        boxProps={{mb: 's20'}}
        autoCapitalize="words"
      />

      <FormTextInput
        control={control}
        name="lastName"
        label="Sobrenome"
        placeholder="Digite seu sobrenome"
        boxProps={{mb: 's20'}}
        autoCapitalize="words"
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
        errorMessage={
          emailValidateQuery.isUnavailable ? 'Email indisponível' : undefined
        }
        RightComponent={
          emailValidateQuery.isLoading
            ? () => <ActivityIndicator size={'small'} />
            : undefined
        }
      />

      <FormPasswordInput
        control={control}
        name="password"
        boxProps={{mb: 's48'}}
      />

      <Button
        text="Criar minha conta"
        onPress={handleSubmit(onSubmit)}
        loading={isLoading}
        disabled={
          !formState.isValid ||
          usernameQuery.isLoading ||
          usernameQuery.isUnavailable ||
          emailValidateQuery.isLoading ||
          emailValidateQuery.isUnavailable
        }
      />
    </ScreenWrapper>
  );
}
