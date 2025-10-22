import { createContext, useState, PropsWithChildren, SyntheticEvent, useEffect } from 'react'

import { AuthContextType } from '@/types/AuthTypes'
import useAxios from 'axios-hooks'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@/types/AppRoutesType'

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  login: () => {},
  logout: () => {},
  loadingAuth: false,
  errorLogin: false,
})

export default function LoggedInAuthContext({ children }: PropsWithChildren) {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null,
  )
  const [errorLogin, setErrorLogin] = useState(false)
  const [{ data, loading, error }, auth] = useAxios(
    {
      url: 'https://carsharing-backend-production.up.railway.app/auth',
      method: 'POST',
    },
    { manual: true },
  )
  const navigate = useNavigate()

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
    if (error) {
      setErrorLogin(true)
      console.error(error.response?.data?.message)
    }
    if (data) {
      localStorage.setItem('token', data?.token)
      setLoggedIn(
        localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null,
      )
      const tokenExp = jwtDecode(data?.token).exp
      setTimeout(() => {
        logout()
      }, tokenExp)
    }
  }, [data, error])
  const logout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
    navigate(AppRoutes.login)
  }
  const loadingAuth = loading

  return (
    <AuthContext.Provider value={{ loggedIn, login, loadingAuth, logout, errorLogin }}>
      {children}
    </AuthContext.Provider>
  )
}
