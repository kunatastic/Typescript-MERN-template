import React, { useContext } from 'react';

import { Hero, Main, NotFound, SignIn, SignUp, Test } from './pages';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/Auth.Context';

const AppRoutes = (): JSX.Element => {
  const { loggedIn } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={loggedIn ? <Hero /> : <Main />} />
        <Route path="/signin" element={loggedIn ? <Navigate replace to="/" /> : <SignIn />} />
        <Route path="/signup" element={loggedIn ? <Navigate replace to="/" /> : <SignUp />} />
        <Route path="/test" element={<Test />} />
        <Route path="/evilcat" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/evilcat" />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
