// import { ReactElement } from 'react'
// import CarsDetails from './components/CarsDetails'
// import { configure } from 'axios-hooks'
// import { createRoutesFromElements, Route, RouterProvider } from 'react-router'
// import { createBrowserRouter } from 'react-router-dom'
// import Layout from './components/Layout'
// import Home from './pages/Home'

// // Configure axios hooks
// // Do not delete this if you want to use the provided API hooks in `src/hooks`
// configure({
//   defaultOptions: {
//     autoCancel: false,
//   },
// })

// function App(): ReactElement {
//   const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />}></Route>
//       </Route>,
//     ),
//   )
//   return <RouterProvider router={router} />
// }

// export default App
import { ReactElement } from 'react'
import CarIcon from './assets/CarIcon'
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
        {/* Home route (kept as is) */}
        <Route index element={<Home />} />

        {/* Car details route */}
        <Route
          path="details"
          element={
            <CarsDetails
              image={<CarIcon />}
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
