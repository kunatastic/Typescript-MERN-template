import React, { useContext } from 'react';
import AppRoutes from './AppRoutes';
import { Loading } from './components';
import { AuthContext } from './context/Auth.Context';

function App(): JSX.Element {
  const info = useContext(AuthContext);
  console.log(typeof info?.loggedIn === 'boolean');
  return (
    <React.Fragment>
      {typeof info?.loggedIn === 'undefined' && ''}
      {typeof info?.loggedIn === 'boolean' && <AppRoutes />}
      {/* <AppRoutes /> */}
    </React.Fragment>
  );
}

export default App;
