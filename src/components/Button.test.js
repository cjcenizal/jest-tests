import React from 'react';
import { render } from 'enzyme';
import { Button } from './Button';

describe('Button', () => {
  test('is rendered', () => {
    const component = render(<Button>Hello world</Button>);

    expect(component).toMatchSnapshot();
  });
});
