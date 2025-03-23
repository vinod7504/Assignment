
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Home/HomePage';
import LoginPage from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </>
    
  );
}

export default App;
