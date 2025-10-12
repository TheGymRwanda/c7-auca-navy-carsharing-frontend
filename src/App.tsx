import { ReactElement } from 'react'

import { configure } from 'axios-hooks'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

import { AppRoutes } from '@/types/AppRoutesType'
import Layout from '@/components/Layout'
import Home from '@/pages/Home'
import CarsDetails from '@/pages/CarsDetails'
import NewBooking from '@/pages/NewBooking'
import MyCarsBookings from '@/pages/MyCarsBooking'
import SeeMyCars from '@/pages/SeeMyCars'
import ManageBookings from '@/pages/ManageBookings'
import AddNewCar from '@/pages/AddNewCar'
import Error from '@/pages/Error'

// Configure axios hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={AppRoutes.home} element={<Layout />}>
        <Route index element={<Home />} />
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
