import React from 'react';

import {
  Button,
  ScreenWrapper,
  Text,
  FormTextInput,
  FormPasswordInput,
} from '@components';

import {useForm} from 'react-hook-form';
import {useResetNavigationSuccess} from '@hooks';

import {zodResolver} from '@hookform/resolvers/zod';
import {SignUpFormSchema, signUpFormSchema} from './signUpFormSchema';

export function SignUpScreen() {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormSchema>({
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpFormSchema),
  });

  function onSubmit(data: SignUpFormSchema) {
    console.log(data);

    reset({
      icon: {
        name: 'checkRound',
        color: 'background',
      },
      title: 'Sua conta foi criada com sucesso!',
      subtitle: 'Agora é só fazer login na nossa plataforma',
    });
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
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullname"
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
        autoCapitalize="words"
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />

      <FormPasswordInput
        control={control}
        name="password"
        boxProps={{mb: 's48'}}
      />

      <Button
        text="Criar minha conta"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
      />
    </ScreenWrapper>
  );
}
