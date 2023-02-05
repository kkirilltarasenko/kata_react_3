import React, { FC } from 'react';
import './ShowMoreButton.scss';

interface ShowMoreButtonProps {
  body: string;
  onClick: () => void;
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({ body, onClick }): JSX.Element => {
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className="show__button"
    >
      {body}
    </button>
  );
};

export default ShowMoreButton;
