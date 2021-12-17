import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, HeaderText } from '../../components';
import { AuthContext } from '../../context/Auth.Context';
import { getLogout } from '../../data/API';

const Hero = (): JSX.Element => {
  const navigate = useNavigate();
  const loginInfo = useContext(AuthContext);
  return (
    <div className="p-10 min-h-screen flex items-center justify-center bg-gray-100 relative">
      <button
        className='className="m-1 border-2 shadow-lg rounded-sm px-8 py-2 md:px-16 md:py-4 bg-red-600 text-white absolute right-1 -top-2"'
        onClick={async () => {
          await getLogout();
          loginInfo?.getLoggedIn();
          navigate('/', { replace: true });
        }}
      >
        Log Out
      </button>
      <HeaderText text="Welcome hero!!! You are now logged In" />
    </div>
  );
};

export default Hero;
