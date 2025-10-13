import { useContext } from 'react'
import { Menu, MenuButton, MenuItems } from '@headlessui/react'

import { AppRoutes } from '@/types/AppRoutesType'
import { AuthContext } from '@/context/LoggedInAuthContext'
import NavigationMenuTransition from '@/components/menu-bar/NavigationMenuTransition'
import MenuLink from '@/components/menu-bar/MenuLink'
import CarIcon from '@/assets/CarIcon'
import DateIcon from '@/assets/DateIcon'
import CarsIcon from '@/assets/CarsIcon'
import ListIcon from '@/assets/ListIcon'
import CarPlusIcon from '@/assets/CarPlusIcon'
import LogoutIcon from '@/assets/LogoutIcon'

export default function NavigationMenu() {
  const { logout } = useContext(AuthContext)

  return (
    <div className="top-16 w-[fit-content]">
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="inline-flex w-full justify-center rounded-md  px-4 py-2 font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          {({ active }) => <span>{!active ? 'Menu' : 'Close'}</span>}
        </MenuButton>

        <NavigationMenuTransition>
          <MenuItems className="absolute mt-10 w-56 origin-top-right divide-gray-100 rounded-md bg-nav-menu px-4 py-2 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <MenuLink route={AppRoutes.bookCar} icon={<CarIcon />} name="Book a Car" />
            <MenuLink route={AppRoutes.myBookings} icon={<DateIcon />} name="My Bookings" />
            <h3 className="mt-3 border-t p-2.5 font-bold">My cars</h3>
            <MenuLink route={AppRoutes.seeMyCars} icon={<CarsIcon />} name="See My Cars" />
            <MenuLink route={AppRoutes.myCarsBooking} icon={<ListIcon />} name="My Car's Booking" />
            <MenuLink route={AppRoutes.addNewCars} icon={<CarPlusIcon />} name="Add New Car" />
            <div className="my-2 border-t"></div>
            <MenuLink route={AppRoutes.home} icon={<LogoutIcon />} name="Logout" onclick={logout} />
          </MenuItems>
        </NavigationMenuTransition>
      </Menu>
    </div>
  )
}
