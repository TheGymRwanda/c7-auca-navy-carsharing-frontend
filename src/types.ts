import { type Dispatch, type SetStateAction } from 'react'

export enum AppRoutes {
  bookCar = 'cars/:id/book',
  carDetail = '/cars/:id',
  myBookings = 'bookings/rented',
  seeMyCars = 'cars/owned',
  myCarsBooking = 'bookings/owned',
  addNewCars = 'cars/new',
  notFoundPage = '/*',
  home = '/',
  login = '/login',
}

export interface BaseComponentsProp {
  children?: React.ReactNode
}

export type AuthValues = {
  loggedIn: boolean
  setLoggedIn: Dispatch<SetStateAction<boolean>>
}

export type MenuItemProp = {
  handleShowNavMenu: () => void
  route: AppRoutes | string
  icon: React.ReactElement<React.JSXElementConstructor<string>>
  name: string
}
