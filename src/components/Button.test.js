import React from 'react';
import { render, shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { Button } from './Button';

describe('Button', () => {
  test('is rendered', () => {
    const component = render(<Button>Hello world</Button>);

    expect(component).toMatchSnapshot();
  });

  describe('props', () => {
    describe('disabled', () => {
      test('is rendered', () => {
        const component = render(<Button disabled />);

        expect(component).toMatchSnapshot();
      });
    });

    describe('onClick', () => {
      test('is called when clicked', () => {
        const onClickHandler = sinon.spy();

        const component = shallow(<Button onClick={onClickHandler} />);
        component.simulate('click');
        sinon.assert.calledOnce(onClickHandler);
      });
    });
  });
});
