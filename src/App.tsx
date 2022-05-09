import { useState, useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import UserDetails from './screens/UserDetails';
import UserList from './screens/UserList';
import UserDetailsWithRedux from './screens/UserDetailsWithRedux';
import UseContextExample from './screens/UseContextExample';
import UserListWithRedux from './screens/UserListWithRedux';
import TypescriptReturnReactNode from './screens/TypescriptReturnReactNode';

import Home from './screens/Home';
import TSDemo from './screens/TSDemo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tsdemo" element={<TSDemo />}></Route>
        <Route path="users" element={<UserList />}></Route>
        <Route path="users/:userid" element={<UserDetails />} />
        <Route path="use-context-example" element={<UseContextExample />} />
        <Route path="ts-return-react-node" element={<TypescriptReturnReactNode />} />
        <Route path="users-with-redux" element={<UserListWithRedux />}></Route>
        <Route path="users-with-redux/:userid" element={<UserDetailsWithRedux />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
