import { NavLink } from 'react-router-dom'
import { Menu } from '@headlessui/react'

import { MenuItemProp } from '@/types/MenuType'
import PropTypes from 'prop-types'

export default function MenuItem({ handleShowNavMenu, route, icon, name }: MenuItemProp) {
  return (
    <Menu.Item>
      {({ active }: { active: boolean }) => (
        <NavLink
          className={`${
            active ? 'text-white' : 'text-gray-900'
          } group flex w-full items-center gap-4 rounded-md p-2 text-white`}
          onClick={handleShowNavMenu}
          to={route}
        >
          {icon}
          <span>{name}</span>
        </NavLink>
      )}
    </Menu.Item>
  )
}

MenuItem.propTypes = {
  handleShowNavMenu: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}
