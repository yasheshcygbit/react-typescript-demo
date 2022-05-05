import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { User } from '../interfaces';
import Greet, { PersonGender } from '../components/Greet';
import UserList from '../components/UserList';

function UserDetails() {
  let params = useParams();
  const [number1, setNumber1] = useState<number>(0);
  const [number2, setNumber2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [userDetails, setUserDetails] = useState<User | null>(null);

  const personName = {
    name: 'Yashesh',
    email: 'Tamboli'
  }
  const nameList = [
    {
      name: 'Yashesh',
      email: 'Tamboli'
    },
    {
      name: 'Nishil',
      email: 'Tamboli'
    }
  ]

  const onChangeNum1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber1(parseInt(e.target.value));
  }

  const onChangeNum2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber2(parseInt(e.target.value));
  }

  const onAdd = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setResult(number1 + number2);
  }

  return (
    <div className="user-details">
      <h1>TS Demo</h1>
      <div>
        <h3>Add two numbers</h3>
        <input type={'text'} value={number1 || 0} onChange={onChangeNum1} />
        <input type={'text'} value={number2 || 0} onChange={onChangeNum2} />
        <div>Result: {result}</div>
        <div>
          <button onClick={(e) => onAdd(e)}>Add</button>
        </div>
        <div>
          <h3>Person Demo</h3>
          <Greet name='Yashesh' gender={PersonGender.MALE} isOnline={false} messageCount={2} />
          <UserList userList={nameList} />
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
