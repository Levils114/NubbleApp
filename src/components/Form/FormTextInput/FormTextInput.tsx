import React from 'react';

import {Controller, FieldValues, UseControllerProps} from 'react-hook-form';

import {TextInput, TextInputProps} from '@components';

export function FormTextInput<FormType extends FieldValues>({
  control,
  name,
  errorMessage,
  ...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({field, fieldState}) => (
        <TextInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message || errorMessage}
          {...textInputProps}
        />
      )}
    />
  );
}
