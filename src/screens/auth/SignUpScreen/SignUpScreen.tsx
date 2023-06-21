/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {Button} from '../../../components/Button';
import {Icon} from '../../../components/Icon';
import {ScreenWrapper} from '../../../components/ScreenWrapper/ScreenWrapper';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

export function SignUpScreen() {
  return (
    <ScreenWrapper canGoBack>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Nome completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
        rightComponent={() => <Icon name="eyeOn" color="gray2" />}
      />

      <Button text="Criar minha conta" />
    </ScreenWrapper>
  );
}
