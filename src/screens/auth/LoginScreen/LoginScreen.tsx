/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {Text} from './../../../components/Text';
import {Button} from './../../../components/Button';
import {TextInput} from './../../../components/TextInput/TextInput';
import {Icon} from './../../../components/Icon';
import {ScreenWrapper} from '../../../components/ScreenWrapper/ScreenWrapper';

export function LoginScreen() {
  return (
    <ScreenWrapper>
      <Text preset="headingLarge">Olá</Text>
      <Text preset="paragraphLarge" mt="s8" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{
          mb: 's20',
        }}
      />
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{
          mb: 's10',
        }}
        rightComponent={() => <Icon name="eyeOn" color="gray2" />}
      />

      <Text color="primary" bold preset="paragraphSmall">
        Esqueci minha senha
      </Text>

      <Button text="Entrar" mt="s48" />
      <Button text="Criar uma conta" mt="s12" preset="outline" />
    </ScreenWrapper>
  );
}
