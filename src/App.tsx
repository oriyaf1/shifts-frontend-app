import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import ShiftSelectionPage from './pages/ShiftSelectionPage'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import NavItem from './components/NavItem';
import { UserContext, UserContextProvider } from './context/UserContext';
import AuthLayout from './components/AuthLayout';
import ErrorPage from './pages/ErrorPage';
import MyAccountPage from './pages/MyAccountPage';

function App() {
  const [count, setCount] = useState(9);
  let a: number = 4;

  const userService = useContext(UserContext);
  console.log(userService.isAuth)


  return (
    <Routes>
      {
        userService.isAuth &&
        <Route path='/' element={<AuthLayout />}>
          {<Route index path='/shifts-control' element={<ShiftSelectionPage />} />}
          {<Route path='/users' element={<ShiftSelectionPage />} />}
          <Route path='/select-shifts' element={<ShiftSelectionPage />} />
          <Route path='/my-account' element={<MyAccountPage />} />
          <Route path='*' element={<ShiftSelectionPage />} />
        </Route>
      }
      {
        !userService.isAuth &&
        <Route path='*' element={<LoginPage />} />
      }
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

export default App
