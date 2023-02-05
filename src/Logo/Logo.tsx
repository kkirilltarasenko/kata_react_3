import React, { FC } from 'react';
import logo from '../images/Logo.png';
import './Logo.scss';

interface LogoProps {
  marginTop: number;
  marginBottom: number;
}

const Logo: FC<LogoProps> = ({ marginBottom, marginTop }): JSX.Element => {
  return (
    <img
      className="logo"
      style={{
        marginTop: `${marginTop}px`,
        marginBottom: `${marginBottom}px`,
      }}
      src={logo}
      alt=""
    />
  );
};

export default Logo;
