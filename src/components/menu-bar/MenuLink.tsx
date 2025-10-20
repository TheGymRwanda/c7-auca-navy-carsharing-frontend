import { NavLink } from 'react-router-dom'
import { MenuItem } from '@headlessui/react'

import { MenuLinkProp } from '@/types/MenuType'

export default function MenuLink({ onclick, route, icon, name }: MenuLinkProp) {
  return (
    <MenuItem>
      <NavLink className="flex items-center gap-4 p-2 text-white" to={route} onClick={onclick}>
        {icon}
        <span>{name}</span>
      </NavLink>
    </MenuItem>
  )
}
