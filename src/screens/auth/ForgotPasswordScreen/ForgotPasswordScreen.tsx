import React from 'react';

import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

import {Button} from '../../../components/Button';
import {ScreenWrapper} from '../../../components/ScreenWrapper/ScreenWrapper';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

export function ForgotPasswordScreen() {
  const {reset} = useResetNavigationSuccess();

  function onSubmit() {
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

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          mb: 's48',
        }}
      />

      <Button text="Recuperar senha" onPress={onSubmit} />
    </ScreenWrapper>
  );
}
