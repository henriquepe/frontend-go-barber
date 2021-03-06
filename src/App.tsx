import React from 'react';

import GlobalStyle from './styles/global';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import AuthContext from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthContext.Provider value={{ name: 'Henrique' }}>
        <SignIn />
      </AuthContext.Provider>

      <GlobalStyle />
    </>
  );
};
export default App;
