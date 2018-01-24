import React from 'react';
import { shallow } from 'enzyme';
import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
  test('is rendered', () => {
    const component = shallow(<ButtonGroup />);

    expect(component).toMatchSnapshot();
  });
});
