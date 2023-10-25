import React from 'react';
import UserProvider from './UserProvider';
import ChildComponent from './ChildComponent';

function App() {
  return (
    <UserProvider>
      <ChildComponent />
    </UserProvider>
  );
}

export default App;
