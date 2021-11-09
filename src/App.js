import React, { useState, useEffect }  from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Menu from './Containers/Menu';
import Home from './Pages/Home';
import UsersContainer from './Containers/UsersContainer';
import UserSearch from './Components/UserSearch';
import PlumAnimation from './Pages/PlumAnimation';
import Admin from './Pages/Admin';

import './App.css';

function App() {

  const [ userList, setUserList ] = useState([]);

  useEffect( () => 
      fetch('users.json')
      .then( response => response.json() )
      .then( data => setUserList(data))
  ,[])


  return (
    <div className="App">
      <BrowserRouter>
          <Menu />

          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/users" element={ <UsersContainer userList={userList} />} />
            <Route path="/userSearch" element={ <UserSearch data={userList} />} />
            <Route path="/plumAnimation" element={<PlumAnimation />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
