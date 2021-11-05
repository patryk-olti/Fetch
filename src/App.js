import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import UsersContainer from './Containers/UsersContainer';
import UserSearch from './Components/UserSearch';
import Menu from './Containers/Menu';

import './App.css';

const Home = () => <div>Hello World</div>

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Menu />

          <Routes>
            <Route path="/" element={ <Home />} />
          </Routes>
          <Routes>
            <Route path="/users" element={ <UsersContainer />} />
          </Routes>
          <Routes>
            <Route path="/userSearch" element={ <UserSearch />} />
          </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
