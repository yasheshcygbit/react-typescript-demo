import axios from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../interfaces';
import Greet, { PersonGender } from '../components/Greet';
import UserList from '../components/UserList';

const UserNameContext = createContext({
  firstName: 'Abc',
  lastName: 'xyz'
});

const ChildComponent = () => {
  const user = useContext(UserNameContext);
  return (
    <div>
      <h3>Child Component Area</h3>
      <h3>Firstname variable in Child: {user.firstName}</h3>
      <h3>Lastname variable in Child: {user.lastName}</h3>
    </div>
  )
}

function ParentComponent() {
  const [user, setUser] = useState<string>('Hey');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  return (
    <div className="user-details">
      <UserNameContext.Provider value={{
        firstName: firstName,
        lastName: lastName
      }}>
        <h1>Use Context Example</h1>
        <h3>Used to pass on state of parent component into child components without props drilling into those children. So if the state variable of the parent component changes, the child component also gets those changes without passing the state variable in props</h3>
        <div>
          <h3>Parent Component Area</h3>
          <h3>Username in parent state: {user}</h3>

          First: <input onChange={(e) => setFirstName(e.target.value)} />
          Last: <input onChange={(e) => setLastName(e.target.value)} />
        </div>
        <br/>
        <br/>
        <br/>
        <ChildComponent />
      </UserNameContext.Provider>
    </div>
  );
}

export default ParentComponent;
