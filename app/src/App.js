import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/all' element={<AllUsers />} />
        <Route  path='/add' element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
