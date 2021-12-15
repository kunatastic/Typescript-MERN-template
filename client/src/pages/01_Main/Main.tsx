import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Button, HeaderText } from '../../components';
import { getHelloMessage } from '../../data/API';

const Main = (): JSX.Element => {
  const [message, setMessage] = useState<string>('Loading...');

  // get the route name from the url
  const routeName = useLocation().pathname;

  useEffect(() => {
    const getHello = async () => {
      const data = await getHelloMessage();
      setMessage(data.msg);
    };
    getHello();
  }, []);

  return (
    <div className="p-10 min-h-screen flex items-center justify-center flex-col bg-black">
      <HeaderText text={`${message} from TS Template`} />

      <div className="w-full px-20 py-20">
        <div className="flex items-center justify-center">
          <Button text="Sign In" route="/signin" />
          <div className="mx-2"></div>
          <Button text="Sign Up" route="/signup" />
        </div>
      </div>
    </div>
  );
};

export default Main;
