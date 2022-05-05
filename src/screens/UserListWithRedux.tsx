import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { User } from '../interfaces';
import { getUserList, setUserName } from '../redux/slices/userSlices';
import { AppDispatch, AppState } from '../redux/store';

function UserList() {
  const userName = useSelector((state: AppState) => state.userReducer.userName)
  const userList = useSelector((state: AppState) => state.userReducer.userList)
  const isUserListLoading = useSelector((state: AppState) => state.userReducer.isUserListLoading);
  const dispatch = useDispatch<AppDispatch>();
  // const fetchUserList = async (page: number): Promise<void> => {
  //   setLoading(true);
  //   try {
  //     let response = await axios.get(`https://reqres.in/api/users?page=${page}`);
  //     console.log('[RESPONSE response]', response);
  //     setLoading(false);
  //     if (response && response.data && response.data.data) {
  //       setUserList(response.data.data)
  //     }
  //   } catch (error) {
  //     setLoading(false);
  //   }
  // }

  useEffect(() => {
    // fetchUserList(1);
    dispatch(getUserList(1));
  }, [])

  const onClickChangeUserName = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
    dispatch(setUserName("John Das"))
  }
  
  const onClickUserList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(getUserList(1));
  }

  return (
    <div className="user-list">
      <h1>List of Users</h1>
      <div className=''>
        <h2>Username change - Normal Redux Call</h2>
        <h3>{userName}</h3>
        <button onClick={(e) => onClickChangeUserName(e)}>Click to change username</button>
      </div>
      <h1>List of Users - Async Redux Call</h1>
      <button onClick={(e) => onClickUserList(e)}>Click to fetch user list</button>
      {isUserListLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='list-users'>
          {userList && Array.isArray(userList) ? (
            userList.map(item => (
              <div style={{ paddingBottom: 20 }}>
                <Link to={`/users-with-redux/${item.id}`}>
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
