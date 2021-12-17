import React from 'react';
import { HeaderText } from '.';

const Loading = (): JSX.Element => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-900 to-black">
      <div className="flex justify-center items-center h-full">
        <HeaderText text="loading" />
        <span className="w-4 h-4 my-12 mx-1 bg-purple-500 rounded-full animate-loader"></span>
        <span className="w-4 h-4 my-12 mx-1 bg-blue-500 rounded-full animate-loader animation-delay-200"></span>
        <span className="w-4 h-4 my-12 mx-1 bg-green-500 rounded-full animate-loader animation-delay-400"></span>
      </div>
    </div>
  );
};

export default Loading;
