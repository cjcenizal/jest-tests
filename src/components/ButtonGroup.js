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
