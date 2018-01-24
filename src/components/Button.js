import React from 'react';

export const Button = ({ children, icon, disabled, onClick, ...rest }) => {
  const onClickButton = e => {
    if (disabled) {
      return;
    }

    onClick(e);
  }

  const iconElement = icon ? <span className={icon} /> : undefined;

  return (
    <button className="myAwesomeButton" disabled={disabled} onClick={onClickButton} {...rest}>
      {iconElement}{children}
    </button>
  );
};
