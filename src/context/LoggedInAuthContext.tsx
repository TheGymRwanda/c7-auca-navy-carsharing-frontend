import { createContext, useState } from 'react'

import { BaseComponentsProp } from '@/types/base'
import { AuthValues } from '@/types/AuthTypes'

export const AuthContext = createContext<AuthValues>({} as AuthValues)

export default function LoggedInAuthContext({ children }: BaseComponentsProp) {
  const [loggedIn, setLoggedIn] = useState(false)

  const value = {
    loggedIn,
    setLoggedIn,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
