import React, { FC } from 'react';
import './ClearButton.scss';

interface ClearButtonProps {
  body: string;
  onClick: () => void;
}

const ClearButton: FC<ClearButtonProps> = ({ body, onClick }): JSX.Element => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="clear__button"
    >
      {body}
    </button>
  );
};

export default ClearButton;
