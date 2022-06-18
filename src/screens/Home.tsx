import { useEffect, useState } from 'react';
import { Link, Outlet } from "react-router-dom";

function UserList() {
  useEffect(() => {
    console.log('[USER_LIST]')
  }, [])
  return (
    <div className="user-list">
      <h1>Home</h1>
      <h2><Link to={'tsdemo'}>Go To TS Demo</Link></h2>
      <h2><Link to={'users'}>Go To User List</Link></h2>
      <h2><Link to={'use-context-example'}>Go To UseContext Example</Link></h2>
      <h2><Link to={'use-context-example-2'}>Go To UseContext Example 2</Link></h2>
      <h2><Link to={'ts-return-react-node'}>Go To React Node Example</Link></h2>
      <h2><Link to={'users-with-redux'}>Go To User List - With Redux</Link></h2>
    </div>
  );
}

export default UserList;
