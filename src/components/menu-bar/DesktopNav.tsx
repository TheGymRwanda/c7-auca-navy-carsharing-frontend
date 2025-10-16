import { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '@/context/LoggedInAuthContext'
import { AppRoutes } from '@/types/AppRoutesType'

export default function DesktopNav() {
  const { logout } = useContext(AuthContext)
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex gap-5 pl-10 text-white">
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.home} className="transition hover:border-y">
            Book A Car
          </NavLink>
        </li>
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.myBookings} className="transition hover:border-y">
            My Bookings
          </NavLink>
        </li>
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.seeMyCars} className="transition hover:border-y">
            See My Cars
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-5 text-white">
        <li>
          <NavLink to={AppRoutes.myCarsBooking} className="transition hover:border-y">
            My Car&apos;s Booking
          </NavLink>
        </li>
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.addNewCars} className="transition hover:border-y">
            Add New Car
          </NavLink>
        </li>
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.landing} className="transition hover:border-y" onClick={logout}>
            Logout
          </NavLink>
        </li>
        <div>|</div>
      </ul>
    </nav>
  )
}
