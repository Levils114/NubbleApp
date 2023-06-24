import React from 'react';

import {useForm} from 'react-hook-form';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

import {Button} from '../../../components/Button';
import {ScreenWrapper} from '../../../components/ScreenWrapper/ScreenWrapper';
import {Text} from '../../../components/Text';
import {FormTextInput} from '../../../components/Form/FormTextInput/FormTextInput';
import {FormPasswordInput} from '../../../components/Form/FormPasswordInput/FormPasswordInput';

interface SignUpFormProps {
  username: string;
  fullname: string;
  email: string;
  password: string;
}

export function SignUpScreen() {
  const {reset} = useResetNavigationSuccess();
  const {control, formState, handleSubmit} = useForm<SignUpFormProps>({
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: SignUpFormProps) {
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
        rules={{
          required: 'Username obrigatório',
        }}
        label="Seu username"
        placeholder="@"
        boxProps={{mb: 's20'}}
      />

      <FormTextInput
        control={control}
        name="fullname"
        rules={{
          required: 'Nome completo obrigatório',
        }}
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
        autoCapitalize="words"
      />

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
