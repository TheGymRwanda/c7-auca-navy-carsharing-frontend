import { Outlet } from 'react-router'

import AuthenticationContext from '@/context/AuthenticationContext'
import Header from '@/components/menu-bar/Header'

export default function Layout() {
  return (
    <AuthenticationContext>
      <Header />
      <main className="bg-primary-color">
        <Outlet />
      </main>
    </AuthenticationContext>
  )
}
