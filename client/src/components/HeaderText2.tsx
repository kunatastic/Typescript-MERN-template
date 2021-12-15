import React from 'react';

interface IHeaderTextProps {
  text: string;
  center?: boolean;
}

const HeaderText2 = ({ text, center = true }: IHeaderTextProps): JSX.Element => {
  return (
    <h1 className={`text-6xl font-black text-white ${center ? 'text-center' : null}`}>
      <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-purple-500">
        {text}
      </span>
    </h1>
  );
};

export default HeaderText2;
