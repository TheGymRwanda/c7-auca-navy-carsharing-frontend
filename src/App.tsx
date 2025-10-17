import { ReactElement } from 'react'

import { configure } from 'axios-hooks'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

import { AppRoutes } from '@/types/AppRoutesType'
import Layout from '@/components/Layout'
import Landing from '@/pages/Landing'
import CarsDetails from '@/pages/CarsDetails'
import NewBooking from '@/pages/NewBooking'
import MyCarsBookings from '@/pages/MyCarsBooking'
import SeeMyCars from '@/pages/SeeMyCars'
import ManageBookings from '@/pages/ManageBookings'
import AddNewCar from '@/pages/AddNewCar'
import Error from '@/pages/Error'
import Login from '@/pages/Login'
import Home from '@/pages/Home'

// Configure axios hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path={AppRoutes.login} element={<Login />} />
        <Route path={AppRoutes.home} element={<Home />} />
        <Route path={AppRoutes.bookCar} element={<NewBooking />} />
        <Route path={AppRoutes.myBookings} element={<ManageBookings />} />
        <Route path={AppRoutes.carDetail} element={<CarsDetails />} />
        <Route path={AppRoutes.seeMyCars} element={<SeeMyCars />} />
        <Route path={AppRoutes.myCarsBooking} element={<MyCarsBookings />} />
        <Route path={AppRoutes.addNewCars} element={<AddNewCar />} />
        <Route path={AppRoutes.notFoundPage} element={<Error />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

export default App
