import React from 'react';

import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {useForm} from 'react-hook-form';

import {
  forgotPasswordFormSchema,
  ForgotPasswordFormSchema,
} from './forgotPasswordFormSchema';
import {zodResolver} from '@hookform/resolvers/zod';

import {Button} from '../../../components/Button';
import {ScreenWrapper} from '../../../components/ScreenWrapper/ScreenWrapper';
import {Text} from '../../../components/Text';
import {FormTextInput} from '../../../components/Form/FormTextInput/FormTextInput';

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
