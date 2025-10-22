import { createContext, useState, PropsWithChildren, SyntheticEvent, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import useAxios from 'axios-hooks'

import { AppRoutes } from '@/types/AppRoutesType'
import { AuthContextType } from '@/types/AuthTypes'
import { apiUrl } from '@/util/apiUrl'

export const AuthContext = createContext<AuthContextType>({
  loggedIn: false,
  login: () => {},
  logout: () => {},
  loadingAuth: false,
  errorLogin: false,
  userId: 17,
})

export default function LoggedInAuthContext({ children }: PropsWithChildren) {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('token') !== undefined && localStorage.getItem('token') !== null,
  )
  const [errorLogin, setErrorLogin] = useState(false)
  const [{ data, loading, error }, auth] = useAxios(
    {
      url: `${apiUrl}/auth`,
      method: 'POST',
    },
    { manual: true },
  )
  const [userId, setUserId] = useState(17)
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
      setUserId(data?.userId)
    }
  }, [data, error])
  const logout = () => {
    localStorage.removeItem('token')
    setLoggedIn(false)
    navigate(AppRoutes.login)
  }
  const loadingAuth = loading

  return (
    <AuthContext.Provider value={{ loggedIn, login, loadingAuth, logout, errorLogin, userId }}>
      {children}
    </AuthContext.Provider>
  )
}
