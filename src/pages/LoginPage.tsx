import React, { useContext, useState } from 'react'
import Button from '../components/Button'
import { AiOutlineCrown, AiOutlineUser } from 'react-icons/ai'
import { Credentials, UserContext } from '../context/UserContext'

function LoginPage() {

  const userService = useContext(UserContext);

  const [loging, setLoging] = useState(false)

  const login = (credentials: Credentials) => {
    setLoging(true);
    userService.login(credentials).finally(() => setLoging(false))
  }

  return (
    <>
      {userService.isAuth && <div>LoginPage: I'm not supposed to be marooned...</div>}
      <div className=' flex flex-col justify-center items-center h-max gap-1'>
        <div className='my-10'>
          <div className=' text-lg font-bold text-center w-full'>shift system</div>
          <div className=' text-2xl font-bold text-center w-full'>Welcome!</div>
        </div>
        <Button onClick={() => { login({ username: 'employee', password: '@#$SDfsdf#$%#$' }) }}
          label='Login as Employee' bg='bg-green-300' icon={<AiOutlineUser />}
          className={loging ? ' animate-pulse' : ''} />
        <Button onClick={() => { login({ username: 'manager', password: '$3WER454345Fsdf*123$' }) }}
          label='Login as Manager' bg='bg-orange-300' icon={<AiOutlineCrown />}
          className={loging ? ' animate-pulse' : ''} />
      </div>
    </>
  )
}

export default LoginPage