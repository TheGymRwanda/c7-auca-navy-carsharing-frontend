import { createContext, useState, PropsWithChildren, SyntheticEvent, useEffect } from 'react'

import { AuthContextType } from '@/types/AuthTypes'
import useAxios from 'axios-hooks'

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  login: () => {},
  logout: () => {},
  loadingAuth: false,
})

export default function LoggedInAuthContext({ children }: PropsWithChildren) {
  const [loggedIn, setLoggedIn] = useState(false)
  const [{ data, loading, error }, auth] = useAxios(
    {
      url: 'https://carsharing-backend-production.up.railway.app/auth',
      method: 'POST',
    },
    { manual: true },
  )

  const login = (evnt: SyntheticEvent<HTMLFormElement>) => {
    evnt.preventDefault()
    const form = evnt.currentTarget
    const user_name_email = form.user_name_email.value
    const user_pwd = form.password.value
    auth({
      data: {
        username: user_name_email,
        password: user_pwd,
      },
    })
  }
  useEffect(() => {
    if (error) throw new Error(error.response?.data?.message)
    if (data) {
      localStorage.setItem('token', data?.token)
      setLoggedIn(localStorage.getItem('token') !== undefined)
    }
  }, [data, error])
  const logout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
  }
  const loadingAuth = loading

  return (
    <AuthContext.Provider value={{ loggedIn, login, loadingAuth, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
