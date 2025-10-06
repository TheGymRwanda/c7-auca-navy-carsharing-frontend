import { ReactElement } from 'react'
import monicil from './assets/monicil.png'

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
        {/* home route (kept as is) */}
        <Route index element={<Home />} />

        {/* car details route */}
        <Route
          path="/details"
          element={
            <CarsDetails
              image={monicil}
              name="Tini Titan"
              owner="Anna"
              model="Countryman"
              plate="M-LK-3456"
              horsepower="122hp"
              fuel="Petrol"
              restrictions="No Smoking"
            />
          }
        />
      </Route>,
    ),
  )

  return <RouterProvider router={router} />
}

export default App
