import React from 'react';
import {StyleSheet} from 'react-native';

import {lightTheme} from '@global/theme/lightTheme';
import {render, fireEvent, screen} from '@test';

import {Button, ButtonsProps} from '..';

function renderComponent(props?: Partial<ButtonsProps>) {
  const buttonTitle = 'Test title';

  render(<Button text={buttonTitle} {...props} />);

  const buttonTitleElement = screen.queryByText(buttonTitle);
  const buttonElement = screen.getByTestId('button');
  const loadingElement = screen.queryByTestId('activity-indicator');

  return {buttonTitleElement, buttonElement, loadingElement};
}

describe('<Button />', () => {
  it('should called function when Button was pressed', () => {
    // Given
    const mockedFunction = jest.fn();
    const {buttonTitleElement} = renderComponent({onPress: mockedFunction});

    // When
    fireEvent.press(buttonTitleElement!);

    expect(mockedFunction).toHaveBeenCalled();
  });

  it('should not called function when Button was pressed but is disabled', () => {
    // Given
    const mockedFunction = jest.fn();
    const {buttonTitleElement} = renderComponent({
      onPress: mockedFunction,
      disabled: true,
    });

    // When
    fireEvent.press(buttonTitleElement!);

    expect(mockedFunction).not.toHaveBeenCalled();
  });

  test('title color should be gray when button was disabled', () => {
    // Given
    const {buttonTitleElement} = renderComponent({
      disabled: true,
    });
    const {color} = StyleSheet.flatten(buttonTitleElement!.props.style);

    expect(color).toEqual(lightTheme.colors.gray2);
  });

  describe('when button loading', () => {
    it('should show activity indicator when button is loading', () => {
      // Given
      const {loadingElement} = renderComponent({loading: true});

      expect(loadingElement).toBeTruthy();
    });

    it('should not show title element when button is loading', () => {
      // Given
      const {buttonTitleElement} = renderComponent({loading: true});

      expect(buttonTitleElement).toBeFalsy();
    });

    it('should button be disabled when is loading', () => {
      // Given
      const mockedFunction = jest.fn();
      const {buttonElement} = renderComponent({
        loading: true,
        onPress: mockedFunction,
      });

      // When
      fireEvent.press(buttonElement);

      expect(mockedFunction).not.toHaveBeenCalled();
    });
  });
});
