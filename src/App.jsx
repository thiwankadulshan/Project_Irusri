import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import LogIn from "./pages/LogIn";
import DashBoard from './pages/DashBoard';
import Registration from './pages/Registration';
import Account from "./pages/Account";
import './App.css'

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<LogIn/>}/>
          <Route path='/register' element={<Registration/>}/>
          <Route path='/dashboard' element={isLoggedIn ? <DashBoard/> : <LogIn/>}/>
          <Route path='/account' element={isLoggedIn ? <Account/> : <LogIn/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
