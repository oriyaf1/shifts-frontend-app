import React, { useContext, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import Menu from './Menu';
import { UserContext } from "../context/UserContext";
import { FcCalendar } from 'react-icons/fc'
import { VscBellDot, VscBell } from 'react-icons/vsc'


type NavBarProps = {
    pages: string[],
    children: React.ReactNode,

}
function NavBar({ pages, children }: NavBarProps) {
    const userService = useContext(UserContext)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className=' flex justify-between p-3 bg-yellow-200 w-full'>
            <div className=' text-gray-500 font-bold text-lg flex items-center gap-2'><FcCalendar slope={'10x'} /> Shift System </div>
            <div className='flex gap-5 items-center'>
                <div>
                    <VscBellDot />
                </div>
                <div className={` cursor-pointer hover:opacity-50 transition-transform
                 ${openMenu ? 'opacity-30 rotate-[-90deg] ' : ''} `} onClick={() => setOpenMenu(!openMenu)}>
                    <FaBars />
                </div>
                {openMenu && <Menu>
                    <div className='px-2 py-2'>
                        {children}
                    </div>
                </Menu>}
            </div>
        </div >
    )
}

export default NavBar