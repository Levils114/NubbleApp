/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {Icon} from '../Icon';
import {TextInput, TextInputProps} from '../TextInput/TextInput';

export function PasswordInput(props: TextInputProps) {
  const [isPasswordSecurity, setIsPasswordSecurity] = React.useState(true);

  function togglePasswordVisibility() {
    setIsPasswordSecurity(prevState => !prevState);
  }

  return (
    <TextInput
      secureTextEntry={isPasswordSecurity}
      rightComponent={() => (
        <Icon
          name={isPasswordSecurity ? 'eyeOn' : 'eyeOff'}
          color="gray2"
          onPress={togglePasswordVisibility}
        />
      )}
      {...props}
    />
  );
}
