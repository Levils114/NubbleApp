import React from 'react';

import {render, fireEvent} from '@test';

import {PasswordInput} from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('should starts component with hidden text', () => {
    // Given
    const component = render(
      <PasswordInput label="Password" placeholder="password" value="123456" />,
    );
    const {props: passwordInputProps} =
      component.getByPlaceholderText('password');

    expect(passwordInputProps.secureTextEntry).toBeTruthy();
  });

  it('should change eye icon and text secure entry when press eye icon', () => {
    // Given
    const component = render(
      <PasswordInput label="Password" placeholder="password" value="123456" />,
    );
    const eyeOnIconElement = component.getByTestId('eyeOn');

    // When
    fireEvent.press(eyeOnIconElement);

    const eyeOffIconElement = component.getByTestId('eyeOff');
    const {props: passwordInputProps} =
      component.getByPlaceholderText('password');

    expect(eyeOffIconElement).toBeTruthy();
    expect(passwordInputProps.secureTextEntry).toBeFalsy();
  });
});
