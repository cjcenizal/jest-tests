
import React from 'react';
import { render, shallow } from 'enzyme';
import sinon from 'sinon';
import { Button } from './Button';

describe('Button', () => {
  test('is rendered', () => {
    const component = render(<Button />);

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



import React from 'react';
import { Button } from './Button';

export const ButtonGroup = () => {
  return [
    <Button id="save" key="save">
      <span className="fa fa-save"/><span>Save</span>
    </Button>,

    <Button id="delete" key="delete">
      <span className="fa fa-trash"/><span>Delete</span>
    </Button>,

    <Button id="cancel" key="cancel">
      <span className="fa fa-undo"/><span>Cancel</span>
    </Button>,

    <Button id="copy" key="copy">
      <span className="fa fa-copy"/><span>Copy</span>
    </Button>,

    <Button id="edit" key="edit">
      <span className="fa fa-pencil"/><span>Edit</span>
    </Button>
  ];
};

import React from 'react';
import { render } from 'enzyme';
import { ButtonGroup } from './ButtonGroup';

describe('ButtonGroup', () => {
  test('is rendered', () => {
    const component = render(<ButtonGroup />);

    expect(component).toMatchSnapshot();
  });
});
