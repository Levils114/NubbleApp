import React from 'react';

import {render} from '@testing-library/react-native';

import {Button} from '..';

describe('<Button />', () => {
  it('should render component', () => {
    const component = render(<Button text="Test" />);

    expect(component).toBeTruthy();
  });
});
