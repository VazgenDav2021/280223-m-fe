import React from 'react';
import UserContext from './UserContext';

function UserProvider({ children }) {
  const user = {
    name: 'John',
    age: 30,
    gender: 'Male',
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
