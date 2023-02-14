import React, { FC } from 'react';
import './ShowMoreButton.scss';

interface ShowMoreButtonProps {
  body: string;
  onClick: () => void;
  vision: boolean;
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({ body, onClick, vision }): JSX.Element => {
  const classNames = vision ? 'show__button' : 'none';

  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={classNames}
    >
      {body}
    </button>
  );
};

export default ShowMoreButton;
