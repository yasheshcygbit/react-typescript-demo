import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import UserDetails from './UserDetails';
import { User } from '../interfaces';

function UserList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [userList, setUserList] = useState<User[] | null>(null);
  
  const fetchUserList = async (page: number): Promise<void> => {
    setLoading(true);
    try {
      let response = await axios.get(`https://reqres.in/api/users?page=${page}`);
      console.log('[RESPONSE response]', response);
      setLoading(false);
      if (response && response.data && response.data.data) {
        setUserList(response.data.data)
      }
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUserList(1);
  }, [])
  return (
    <div className="user-list">
      <h1>List of Users</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className='list-users'>
          {userList && Array.isArray(userList) ? (
            userList.map(item => (
              <div style={{ paddingBottom: 20 }}>
                <Link to={`/users/${item.id}`}>
                  <h2>{item.first_name + ' ' + item.last_name}</h2>
                  <h4>{item.email}</h4>
                </Link>
              </div>
            ))
          ) : null}
        </div>
      )}
    </div>
  );
}

export default UserList;
