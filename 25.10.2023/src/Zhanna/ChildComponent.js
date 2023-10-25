import React, { useContext } from 'react';
import UserContext from './UserContext';

function ChildComponent() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Gender: {user.gender}</p>
    </div>
  );
}

export default ChildComponent;
