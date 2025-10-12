import { useState } from 'react'
import { useContext } from 'react'

import { Menu } from '@headlessui/react'

import { AppRoutes } from '@/types/AppRoutesType'
import { AuthContext } from '@/context/LoggedInAuthContext'
import CarIcon from '@/assets/CarIcon'
import DateIcon from '@/assets/DateIcon'
import CarsIcon from '@/assets/CarsIcon'
import ListIcon from '@/assets/ListIcon'
import CarPlusIcon from '@/assets/CarPlusIcon'
import LogoutIcon from '@/assets/LogoutIcon'
import MenuItem from '@/components/menu-bar/MenuItem'
import NavigationMenuTransition from '@/components/menu-bar/NavigationMenuTransition'

export default function NavigationMenu() {
  const [showNavgation, setShowNavigation] = useState(false)

  const { logout } = useContext(AuthContext)

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
        <NavigationMenuTransition>
          <Menu.Items className="absolute mt-10 w-56 origin-top-right  divide-y divide-gray-100 rounded-md bg-nav-menu px-4 py-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="border-b p-1">
              <MenuItem
                handleShowNavMenu={handleShowNavMenu}
                route={AppRoutes.bookCar}
                icon={<CarIcon />}
                name="Book a Car"
              />

              <MenuItem
                handleShowNavMenu={handleShowNavMenu}
                route={AppRoutes.myBookings}
                icon={<DateIcon />}
                name="My Bookings"
              />
            </div>
            <h3 className="mt-3 border-none px-3 font-bold">My cars</h3>
            <div className="border-none p-1">
              <MenuItem
                handleShowNavMenu={handleShowNavMenu}
                route={AppRoutes.seeMyCars}
                icon={<CarsIcon />}
                name="See My Cars"
              />

              <MenuItem
                handleShowNavMenu={handleShowNavMenu}
                route={AppRoutes.myCarsBooking}
                icon={<ListIcon />}
                name="My Car's Booking"
              />

              <div className="p-1">
                <MenuItem
                  handleShowNavMenu={handleShowNavMenu}
                  route={AppRoutes.addNewCars}
                  icon={<CarPlusIcon />}
                  name="Add New Car"
                />
              </div>

              <div className="border-t p-1">
                <MenuItem
                  handleShowNavMenu={logout}
                  route={AppRoutes.home}
                  icon={<LogoutIcon />}
                  name="Logout"
                />
              </div>
            </div>
          </Menu.Items>
        </NavigationMenuTransition>
      </Menu>
    </div>
  )
}
