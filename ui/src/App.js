import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Users } from './components/Users'
import { Loader } from './components/Loader'
import { getUserInfo } from './services/UserService'

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    getUserInfo().then(data => setUsers(data));
  }, [])
  
  return (
      <div className="App">
        <Header></Header>
        {users.length === 0 
          ? 
            <Loader />
          :
            <div className="container mrgnbtm">
              <Users users={users}></Users>
            </div>
        }
      </div>
  );
}

export default App;