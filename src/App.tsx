import { ReactElement } from 'react'
import CarsDetails from './pages/CarsDetails'
import { configure } from 'axios-hooks'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NewBooking from './pages/NewBooking'
import MyCarsBookings from './pages/MyCarsBooking'
import SeeMyCars from './pages/SeeMyCars'
import ManageBookings from './pages/ManageBookings'
import AddNewCar from './pages/AddNewCar'
import { AppRoutes } from './types'
import Error from './pages/Error'

// Configure axios hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  const { bookCar, myBookings, seeMyCars, addNewCars, myCarsBooking } = AppRoutes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/cars/:id" element={<CarsDetails />} />

        <Route index element={<Home />} />
        <Route path={bookCar} element={<NewBooking />} />
        <Route path={myBookings} element={<ManageBookings />} />
        <Route path={seeMyCars} element={<SeeMyCars />} />
        <Route path={myCarsBooking} element={<MyCarsBookings />} />
        <Route path={addNewCars} element={<AddNewCar />} />
        <Route path="/*" element={<Error />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

export default App
