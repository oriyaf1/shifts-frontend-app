import React, { useContext } from 'react'
import NavBar from './NavBar'
import NavItem from './NavItem'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { AiOutlineLogout } from 'react-icons/ai'
import { BsCalendarDate, } from 'react-icons/bs'
import { RiUserSettingsLine } from 'react-icons/ri'
import { GrScheduleNew } from 'react-icons/gr'
import { FiUsers } from 'react-icons/fi'


function AuthLayout() {
  const userService = useContext(UserContext)
  return (
    <>
      <NavBar pages={[]}>
        <div className=' text-center font-bold tracking-wider p-2'>hello {userService.userInfo.firstName}</div>
        {/* <div>hi {userService.userInfo.firstName}</div> */}
        {userService.userInfo.role == 'manager' &&
          <>
            <NavItem name={'Shift Management'} href={'/shifts-control'} icon={<BsCalendarDate />} />
            {/* <NavItem name={'User Management'} href={'/user-management'} icon={<FiUsers />} /> */}
          </>
        }
        {userService.userInfo.role == 'employee' &&
          <>
            <NavItem name={'My shifts'} href={'/select-shifts'} icon={<BsCalendarDate />} />
            <NavItem name={'Schedule'} href={'/schedule'} icon={<GrScheduleNew />} />
          </>
        }
        <NavItem name={'My account'} href={'/my-account'} icon={<RiUserSettingsLine />} bg='bg-orange-200' />
        <NavItem name={'Logout'} href={'/'} icon={<AiOutlineLogout />} action={userService.logout} bg='bg-red-200' />
      </NavBar>
      <div className='px-4 pt-1 '>
        <Outlet />
      </div>
    </>
  )
}

export default AuthLayout