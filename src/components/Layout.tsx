import { Outlet } from 'react-router'
import Header from './Header'
import AuthContext from '../context/AuthContext'

export default function Layout() {
  return (
    <>
      <AuthContext>
        <Header />
        <main className="bg-gray-700">
          <Outlet />
        </main>
      </AuthContext>
    </>
  )
}
