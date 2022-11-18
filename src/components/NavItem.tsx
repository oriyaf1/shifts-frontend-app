import React from 'react'
import { Link } from 'react-router-dom'


type NavItemProps = {
    name: string,
    href: string,
    icon?: React.ReactNode,
    bg?: string,
    action?:() => void,

}
function NavItem({ name, action, href, icon, bg }: NavItemProps) {
    return (
        <Link onClick={action} className={`flex items-center gap-2 cursor-pointer m-1 px-3 py-1
        ${bg ? bg : ' bg-lime-200'}
        rounded-md hover:opacity-80 hover:shadow-sm active:opacity-70`}
            to={href}>
            {icon}
            {name}
        </Link>
    )
}

export default NavItem