import { createContext, useState } from 'react'

import { BaseComponentsProp } from '../types'
import { AuthValues } from '../types'

export const contextAuth = createContext<AuthValues>({} as AuthValues)

export default function AuthContext({ children }: BaseComponentsProp) {
  const [loggedIn, setLoggedIn] = useState(false)

  const value = {
    loggedIn,
    setLoggedIn,
  }

  return <contextAuth.Provider value={value}>{children}</contextAuth.Provider>
}
