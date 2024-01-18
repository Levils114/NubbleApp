/* eslint-disable react/no-unstable-nested-components */
import React from 'react';

import {Icon, TextInput, TextInputProps} from '@components';

export function PasswordInput(props: TextInputProps) {
  const [isPasswordSecurity, setIsPasswordSecurity] = React.useState(true);

  function togglePasswordVisibility() {
    setIsPasswordSecurity(prevState => !prevState);
  }

  return (
    <TextInput
      secureTextEntry={isPasswordSecurity}
      RightComponent={() => (
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
