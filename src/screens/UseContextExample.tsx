import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../interfaces';
import Greet, { PersonGender } from '../components/Greet';
import UserList from '../components/UserList';
import UserContext, { IUser } from '../context/UserContext';

const ChildComponent = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <h3>Parent Component Area</h3>
      <h3>fName variable in Parent: {user.fName}</h3>
      <h3>lName variable in Parent: {user.lName}</h3>
    </div>
  )
}

function ParentComponent() {
  const [user, setUser] = useState<IUser>({
    fName: 'Nishil',
    lName: 'Tamboli'
  })

  const changeUser = (): void => {
    setUser({
      fName: 'Yashesh',
      lName: 'Tam'
    })
  }

  return (
    <div className="user-details">
      <UserContext.Provider value={user}>
        <h1>Use Context Example</h1>
        <h3>Used to pass on state of parent component into child components without props drilling into those children. So if the state variable of the parent component changes, the child component also gets those changes without passing the state variable in props</h3>
        <div>
          <h3>Parent Component Area</h3>
          <h3>fName variable in Parent: {user.fName}</h3>
          <h3>lName variable in Parent: {user.lName}</h3>

          <button onClick={changeUser}>Click to change the user</button>
        </div>
        <br/>
        <br/>
        <br/>
        <ChildComponent />
      </UserContext.Provider>
    </div>
  );
}

export default ParentComponent;
