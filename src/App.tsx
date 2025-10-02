import { ReactElement } from 'react'
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

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="book-car" element={<NewBooking />} />
        <Route path="my-bookings" element={<ManageBookings />} />
        <Route path="see-my-cars" element={<SeeMyCars />} />
        <Route path="my-cars-book" element={<MyCarsBookings />} />
        <Route path="add-new-cars" element={<AddNewCar />} />
      </Route>,
    ),
  )
  return <RouterProvider router={router} />
}

export default App
