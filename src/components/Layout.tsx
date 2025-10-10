import { Outlet } from 'react-router'

import AuthContext from '../context/AuthContext'
import Header from './Header'

export default function Layout() {
  return (
    <AuthContext>
      <Header />
      <main className="bg-[#265e78]">
        <Outlet />
      </main>
    </AuthContext>
  )
}
