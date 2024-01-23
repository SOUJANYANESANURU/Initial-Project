import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' Component={Login} />
        <Route path='/login' Component={Login} />
        <Route path='/Signup' Component={Signup} />
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </div>
  );
}

export default App;
