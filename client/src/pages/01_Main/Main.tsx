import React, { useEffect, useState } from 'react';
import { getHelloMessage } from '../../data/API';

const Main = (): JSX.Element => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    async () => {
      const data = await getHelloMessage();
      setMessage(data.msg);
    };
  }, []);

  return (
    <div className="p-10 min-h-screen flex items-center justify-center bg-black">
      <h1 className="text-8xl md:text-9xl font-black text-white text-center">
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-green-400 to-purple-500">
          {message}
        </span>
      </h1>
    </div>
  );
};

export default Main;
