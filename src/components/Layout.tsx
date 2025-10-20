import { Outlet } from 'react-router'

import LoggedInAuthContext from '@/context/LoggedInAuthContext'
import Header from '@/components/Header'

export default function Layout() {
  return (
    <LoggedInAuthContext>
      <Header />
      <main className="bg-primary-color">
        <Outlet />
      </main>
    </LoggedInAuthContext>
  )
}
