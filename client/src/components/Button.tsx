import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  onClick?: () => void;
  text: string;
  route: string;
}

const Button = ({ text, onClick, route }: ButtonProps): JSX.Element => {
  return (
    <Link to={route}>
      <button
        className="m-1 border-2 shadow-lg rounded-sm px-8 py-2 md:px-16 md:py-4 text-white"
        onClick={() => onClick}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
