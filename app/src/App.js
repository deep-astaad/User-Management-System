import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import AllUsers from './components/AllUsers';
import AddUser from './components/AddUser';


function App() {
  return (
    <div className="App">
      <NavBar />
      <AllUsers />
      <AddUser />
    </div>
  );
}

export default App;
