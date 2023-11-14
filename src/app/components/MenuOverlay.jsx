import React from 'react'
import NavLink from './NavLink'
const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-centre">
        {links.map((link, index) => (
            <li key={index} className="text-center">
            <NavLink href={link.path} title={link.title} />
            </li>
        ))}
    </ul>
  )
}

export default MenuOverlay