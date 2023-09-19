import React from 'react';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {Button, ScreenWrapper, Text, FormTextInput} from '@components';
import {useResetNavigationSuccess} from '@hooks';

import {
  forgotPasswordFormSchema,
  ForgotPasswordFormSchema,
} from './forgotPasswordFormSchema';

export function ForgotPasswordScreen() {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<ForgotPasswordFormSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordFormSchema),
    mode: 'onChange',
  });

  function onSubmit(data: ForgotPasswordFormSchema) {
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
    <ScreenWrapper canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          mb: 's48',
        }}
      />

      <Button
        text="Recuperar senha"
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmit)}
      />
    </ScreenWrapper>
  );
}
