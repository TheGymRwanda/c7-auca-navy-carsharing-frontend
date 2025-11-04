import { ReactElement } from 'react'

import { configure } from 'axios-hooks'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'

import { AppRoutes } from '@/types/AppRoutesType'
import Layout from '@/components/Layout'
import Landing from '@/pages/Landing'
import CarsDetails from '@/pages/CarsDetails'
import MyCarsBookings from '@/pages/MyCarsBooking'
import SeeMyCars from '@/pages/SeeMyCars'
import ManageBookings from '@/pages/ManageBookings'
import AddNewCar from '@/pages/AddNewCar'
import ShowAllCars from '@/pages/ShowAllCars'
import Error from '@/pages/Error'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import MyCarDetails from '@/pages/MyCarDetails'
import ProtectedRoute from '@/util/ProtectedRoute'

// Configure axios hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

export default function App(): ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path={AppRoutes.login} element={<Login />} />
        <Route
          path={AppRoutes.home}
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.bookCar}
          element={
            <ProtectedRoute>
              <ShowAllCars />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.myBookings}
          element={
            <ProtectedRoute>
              <ManageBookings />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.carDetail}
          element={
            <ProtectedRoute>
              <CarsDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.seeMyCars}
          element={
            <ProtectedRoute>
              <SeeMyCars />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.seeMyCarDetail}
          element={
            <ProtectedRoute>
              <MyCarDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.myCarsBooking}
          element={
            <ProtectedRoute>
              <MyCarsBookings />
            </ProtectedRoute>
          }
        />
        <Route
          path={AppRoutes.addNewCars}
          element={
            <ProtectedRoute>
              <AddNewCar />
            </ProtectedRoute>
          }
        />
        <Route path={AppRoutes.notFoundPage} element={<Error />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}
