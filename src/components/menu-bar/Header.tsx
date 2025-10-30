import { useContext } from 'react'

import { AuthContext } from '@/context/LoggedInAuthContext'
import AuthHeader from '@/components/menu-bar/AuthHeader'

export default function Header() {
  const { loggedIn } = useContext(AuthContext)

  return <AuthHeader loggedIn={loggedIn} />
}
