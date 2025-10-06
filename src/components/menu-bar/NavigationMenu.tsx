import { NavLink } from 'react-router-dom'
import CarIcon from '../../assets/CarIcon'
import DateIcon from '../../assets/DateIcon'
import CarsIcon from '../../assets/CarsIcon'
import ListIcon from '../../assets/ListIcon'
import CarPlusIcon from '../../assets/CarPlusIcon'
import LogoutIcon from '../../assets/LogoutIcon'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function NavigationMenu() {
  const [showNavgation, setShowNavigation] = useState(false)
  function handleShowNavMenu() {
    setShowNavigation(prev => !prev)
  }
  return (
    <div className="top-16 w-[fit-content]">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
            onClick={handleShowNavMenu}
            className="inline-flex w-full justify-center rounded-md  px-4 py-2 font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
          >
            {showNavgation ? 'Close' : 'Menu'}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-200"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute mt-10 w-56 origin-top-right  divide-y divide-gray-100 rounded-md bg-nav-menu px-4 py-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="border-b p-1">
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center gap-4 rounded-md p-2 text-white`}
                    onClick={handleShowNavMenu}
                    to=""
                  >
                    <CarsIcon />
                    Book a Car
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center gap-4 rounded-md p-2 pb-5 text-white`}
                    onClick={handleShowNavMenu}
                    to=""
                  >
                    <DateIcon />
                    My Bookings
                  </NavLink>
                )}
              </Menu.Item>
            </div>
            <h3 className="mt-3 border-none px-3 font-bold">My cars</h3>
            <div className="border-none p-1">
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center gap-4 rounded-md p-2 text-white`}
                    onClick={handleShowNavMenu}
                    to=""
                  >
                    <CarIcon />
                    See My Cars
                  </NavLink>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <NavLink
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center gap-4 rounded-md p-2 text-white`}
                    onClick={handleShowNavMenu}
                    to=""
                  >
                    <ListIcon />
                    My Car&apos;s Booking
                  </NavLink>
                )}
              </Menu.Item>
              <div className="p-1">
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } pb- group flex w-full items-center gap-4 rounded-md p-2 text-white`}
                      onClick={handleShowNavMenu}
                      to=""
                    >
                      <CarPlusIcon />
                      Add New Car
                    </NavLink>
                  )}
                </Menu.Item>
              </div>
              <div className="border-t p-1">
                <Menu.Item>
                  {({ active }) => (
                    <NavLink
                      className={`${
                        active ? 'bg-violet-500 text-white' : 'text-gray-900'
                      } group flex w-full items-center gap-4 rounded-md p-2 text-white`}
                      onClick={handleShowNavMenu}
                      to=""
                    >
                      <LogoutIcon />
                      Logout
                    </NavLink>
                  )}
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
