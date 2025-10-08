import { createContext, useState, type Dispatch, type SetStateAction } from 'react'

type Children = {
  children: React.ReactNode
}

type AuthValues = {
  loggedIn: boolean
  setLoggedIn: Dispatch<SetStateAction<boolean>>
}

export const contextAuth = createContext<AuthValues>({} as AuthValues)

export default function AuthContext({ children }: Children) {
  const [loggedIn, setLoggedIn] = useState(false)
  const value = {
    loggedIn,
    setLoggedIn,
  }

  return <contextAuth.Provider value={value}>{children}</contextAuth.Provider>
}
