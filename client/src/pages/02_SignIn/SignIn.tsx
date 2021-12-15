import React, { useState } from 'react';
import { HeaderText } from '../../components';
import { FaTwitter } from 'react-icons/fa';
import { GrFacebookOption, GrInstagram } from 'react-icons/gr';
import { postLogin } from '../../data/API';

const SignIn = (): JSX.Element => {
  const [formData, setFormdata] = useState({ email: 'test@gmail.com', password: 'test' });
  const [error, setError] = useState('');

  async function handleSignInSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = await postLogin(formData);
    if (data.status !== 200) setError(data.msg);
  }

  return (
    <section className="min-h-screen flex items-stretch text-white ">
      <div
        className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)',
        }}
      >
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full px-24 z-10">
          <HeaderText text="Welcome" />
          <p className="text-3xl my-4">Hope you enjoy the stay.</p>
        </div>
        <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
          <a href="https://twitter.com/template">
            <span>
              <FaTwitter style={{ fontSize: '1.4rem' }} className="hover:text-blue-500" />
            </span>
          </a>
          <a href="https://www.facebook.com/template">
            <span>
              <GrFacebookOption style={{ fontSize: '1.4rem' }} className="hover:text-blue-700" />
            </span>
          </a>
          <a href="https://www.instagram.com/template">
            <span>
              <GrInstagram style={{ fontSize: '1.4rem' }} className="hover:text-pink-500" />
            </span>
          </a>
        </div>
      </div>

      <div className="bg-black lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0">
        <div
          className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)',
          }}
        >
          <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        </div>
        <div className="w-full py-6 z-20">
          <h1 className={`text-4xl font-black text-white`}>Sign In</h1>

          {/* <div className="py-6 space-x-2">
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
              f
            </span>
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
              G+
            </span>
            <span className="w-10 h-10 items-center justify-center inline-flex rounded-full font-bold text-lg border-2 border-white">
              in
            </span>
          </div> 
          <p className="text-gray-100">or use email your account</p> */}
          <form onSubmit={handleSignInSubmit} className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="block w-full p-4 text-lg rounded-md bg-gray-900"
                value={formData.email}
                onChange={e => setFormdata({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="pb-2 pt-4">
              <input
                className="block w-full p-4 text-lg rounded-md bg-gray-900"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={formData.password}
                onChange={e => setFormdata({ ...formData, password: e.target.value })}
              />
            </div>
            {/* <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
              <a href="#">Forgot your password?</a>
            </div> */}
            <div className="text-right text-red-500">{error}</div>
            <div className="px-4 pb-2 pt-4">
              <button
                type="submit"
                className="uppercase block w-full p-4 text-lg rounded-full bg-gradient-to-r from-green-400 to-purple-500 hover:bg-indigo-600 focus:outline-none"
              >
                sign in
              </button>
            </div>

            <div className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
              <a href="https://twitter.com/template">
                <span>
                  <FaTwitter style={{ fontSize: '1.4rem' }} className="hover:text-blue-500" />
                </span>
              </a>
              <a href="https://www.facebook.com/template">
                <span>
                  <GrFacebookOption
                    style={{ fontSize: '1.4rem' }}
                    className="hover:text-blue-700"
                  />
                </span>
              </a>
              <a href="https://www.instagram.com/template">
                <span>
                  <GrInstagram style={{ fontSize: '1.4rem' }} className="hover:text-pink-500" />
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
