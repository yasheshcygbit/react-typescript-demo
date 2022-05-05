import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { User } from '../interfaces';
import { getUserDetails } from '../redux/slices/userSlices';
import { AppDispatch, AppState } from '../redux/store';

function UserDetails() {
  let params = useParams();
  let dispatch = useDispatch<AppDispatch>();
  const userDetails = useSelector((state: AppState) => state.userReducer.userDetails);

  useEffect(() => {
    if (params && params.userid) {
      dispatch(getUserDetails(parseInt(params.userid)));
    }
  }, [])

  return (
    <div className="user-details">
      <h1>User Details</h1>
      <h2>User Name: {userDetails?.first_name}</h2>
      <h2>User Name: {userDetails?.last_name}</h2>
      <h2>User Name: {userDetails?.email}</h2>
    </div>
  );
}

export default UserDetails;
