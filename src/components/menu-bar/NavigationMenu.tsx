import { NavLink } from 'react-router-dom'
import CarIcon from '../../assets/CarIcon'
import DateIcon from '../../assets/DateIcon'
import CarsIcon from '../../assets/CarsIcon'
import ListIcon from '../../assets/ListIcon'
import CarPlusIcon from '../../assets/CarPlusIcon'
import LogoutIcon from '../../assets/LogoutIcon'

interface showNavgation {
  showNavigation: boolean
}
export default function NavigationMenu({ showNavigation }: showNavgation) {
  return (
    showNavigation && (
      <nav className="absolute ml-4 mt-20 animate-[pulse_0.6s_ease-in-out_1] rounded-xl bg-[#3e7591] p-5 text-white">
        <div className="border-b">
          <NavLink to="" className="flex gap-4 pb-2">
            <CarIcon />
            Book a Car
          </NavLink>
          <NavLink to="" className="flex gap-4 pb-2">
            <DateIcon />
            My Bookings
          </NavLink>
        </div>
        <h3 className="py-4 font-bold">My cars</h3>
        <div className="border-b">
          <NavLink to="" className="flex gap-4 pb-2">
            <CarsIcon />
            See My Cars
          </NavLink>
          <NavLink to="" className="flex gap-4 pb-2">
            <ListIcon />
            My Car&apos;s Booking
          </NavLink>
          <NavLink to="" className="flex gap-4 pb-2">
            <CarPlusIcon />
            Add New Car
          </NavLink>
        </div>
        <NavLink to="" className="flex gap-4 py-2">
          <LogoutIcon />
          Logout
        </NavLink>
      </nav>
    )
  )
}
