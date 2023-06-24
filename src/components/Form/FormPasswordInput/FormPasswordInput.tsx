import React from 'react';
import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {PasswordInput} from '../../PasswordInput/PasswordInput';
import {TextInputProps} from '../../TextInput/TextInput';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  ...props
}: Omit<TextInputProps, 'label'> & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: 'Senha obrigatória',
        minLength: {
          value: 6,
          message: 'Senha deve conter pelo menos 6 dígitos',
        },
      }}
      render={({field, fieldState}) => (
        <PasswordInput
          label="Senha"
          placeholder="Digite sua senha"
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...props}
        />
      )}
    />
  );
}
