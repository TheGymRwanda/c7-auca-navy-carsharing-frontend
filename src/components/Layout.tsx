import { useContext } from 'react'
import { Outlet } from 'react-router'

import AuthenticationContext from '@/context/AuthenticationContext'
import { AuthContext } from '@/context/AuthenticationContext'
import Header from '@/components/menu-bar/Header'

export default function Layout() {
  const { loggedIn } = useContext(AuthContext)
  return (
    <AuthenticationContext>
      <Header />
      <main className="bg-primary-color">{loggedIn ? <Outlet /> : null}</main>
    </AuthenticationContext>
  )
}
