import React from 'react';
import { HeaderText } from '../../components';

const Hero = (): JSX.Element => {
  return (
    <div className="p-10 min-h-screen flex items-center justify-center bg-gray-100">
      <HeaderText text="Welcome hero!!! You are now logged In" />
    </div>
  );
};

export default Hero;
