import { createContext, useState } from 'react'

import { BaseComponentsProp } from '@/types/base'
import { AuthContextType } from '@/types/AuthTypes'

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  login: () => {},
  logout: () => {},
})

export default function LoggedInAuthContext({ children }: BaseComponentsProp) {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = () => setLoggedIn(true)
  const logout = () => setLoggedIn(false)

  return <AuthContext.Provider value={{ loggedIn, login, logout }}>{children}</AuthContext.Provider>
}
