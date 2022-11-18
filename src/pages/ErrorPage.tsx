import React from 'react'
import { BsCalendarDate } from 'react-icons/bs'
import NavItem from '../components/NavItem'

function ErrorPage() {
  return (
    <div>
      <NavItem name={'Shift Management'} href={'/shifts-control'} icon={<BsCalendarDate />} />
    </div>
  )
}

export default ErrorPage