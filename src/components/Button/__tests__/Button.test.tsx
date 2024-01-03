import React from 'react';

import {render, fireEvent, screen} from '@test';

import {Button, ButtonsProps} from '..';

function renderComponent(props?: Partial<ButtonsProps>) {
  const buttonTitle = 'Test title';

  render(<Button text={buttonTitle} {...props} />);

  const buttonTitleElement = screen.getByText(buttonTitle);

  return {buttonTitleElement};
}

describe('<Button />', () => {
  it('should called function when Button was pressed', () => {
    // Given
    const mockedFunction = jest.fn();
    const {buttonTitleElement} = renderComponent({onPress: mockedFunction});

    // When
    fireEvent.press(buttonTitleElement);

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
    fireEvent.press(buttonTitleElement);

    expect(mockedFunction).not.toHaveBeenCalled();
  });
});
