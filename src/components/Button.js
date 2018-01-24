import React from 'react';

export const Button = ({ children, disabled, onClick, ...rest }) => {
  const onClickButton = e => {
    if (disabled) {
      return;
    }

    onClick(e);
  }

  return (
    <button disabled={disabled} onClick={onClickButton} {...rest}>
      {children}
    </button>
  );
};
