import { ReactElement } from 'react'
import CarsDetails from './components/CarsDetails'
import { configure } from 'axios-hooks'
import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'

// Configure axios hooks
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

function App(): ReactElement {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        {}
        <Route index element={<Home />} />

        {}
        <Route path="/cars/:id" element={<CarsDetails />} />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

export default App
