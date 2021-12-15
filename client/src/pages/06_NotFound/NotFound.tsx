import React from 'react';
import { Button, HeaderText } from '../../components';

const NotFound = (): JSX.Element => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center">
      <div className="container mx-auto p-4 flex flex-wrap items-center">
        <div className="w-full md:w-5/12 text-center p-4">
          <img
            src="https://betterstudio.com/wp-content/uploads/2019/12/GIF-in-WordPress.gif"
            alt="Not Found"
            className="flex items-center justify-center w-full"
          />
        </div>
        <div className="w-full md:w-7/12 text-center md:text-left p-8 md:p-16">
          <HeaderText text="404" center={false} />
          <div className="text-xl md:text-3xl font-medium mb-4">
            Oops. This page has gone missing.
          </div>
          <div className="text-lg mb-8">
            You may have mistyped the address or the page may have moved.
          </div>
          <Button route="/" text="Go to home" onClick={() => alert('hello')} />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
