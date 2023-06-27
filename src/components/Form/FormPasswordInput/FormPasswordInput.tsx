import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {PasswordInput, TextInputProps} from '@components';

export function FormPasswordInput<FormType extends FieldValues>({
  control,
  name,
  ...props
}: Omit<TextInputProps, 'label'> & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
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
