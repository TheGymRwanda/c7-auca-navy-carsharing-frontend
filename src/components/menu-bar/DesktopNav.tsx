import { AppRoutes } from '@/types/AppRoutesType'
import { NavLink } from 'react-router-dom'

export default function DesktopNav() {
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex gap-5 pl-10 text-white">
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.home}>Book A Car</NavLink>
        </li>
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.myBookings}>My Bookings</NavLink>
        </li>
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.seeMyCars}>See My Cars</NavLink>
        </li>
      </ul>
      <ul className="flex gap-5 text-white">
        <li>
          <NavLink to={AppRoutes.myCarsBooking}>My Car&apos;s Booking</NavLink>
        </li>
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.addNewCars}>Add New Car</NavLink>
        </li>
        <div>|</div>
        <li>
          <NavLink to={AppRoutes.landing}>Logout</NavLink>
        </li>
        <div>|</div>
      </ul>
    </nav>
  )
}
