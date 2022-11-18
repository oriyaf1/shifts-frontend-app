import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function MyAccountPage() {

    const userService = useContext(UserContext)
  return (
    <>
    <div className=' text-lg font-bold'>Hi {userService.userInfo.firstName}!</div>
    <div>These are your details kept by us:</div>
    <div>{JSON.stringify(userService.userInfo)}</div>
    </>
  )
}

export default MyAccountPage