import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '@/context/LoggedInAuthContext'
import { AppRoutes } from '@/types/AppRoutesType'

import Button from '@/components/ui/Button'
import Hero from '@/components/ui/Hero'
import AuthInputs from '@/components/ui/AuthInputs'
import KeyIcon from '@/assets/KeyIcon'
import ProfileIcon from '@/assets/ProfileIcon'
import UnauthenticatedContainer from '@/components/container/UnauthenticatedContainer'

export default function Login() {
  const { login, loadingAuth, loggedIn, errorLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (loggedIn) {
      navigate(AppRoutes.home)
    }
  }, [loadingAuth])
  return (
    <UnauthenticatedContainer>
      <Hero />
      <p className="pt-8 text-2xl">Log in</p>
      <form onSubmit={login}>
        <AuthInputs
          placeholder="Username/e-mail"
          icon={<ProfileIcon className="fixed ml-4 mt-4 inline" />}
          type="text"
          name="userNameOrEmail"
          required={true}
        />
        <AuthInputs
          placeholder="Password"
          icon={<KeyIcon className="fixed ml-4 mt-4 inline" />}
          type="password"
          name="password"
          required={true}
        />
        {errorLogin && (
          <p className="text-sm text-warn-user">
            <span>Your login attempt was not successful.</span>
            <span className="block">Please make sure your user name and password are correct</span>
          </p>
        )}
        <Button
          disabled={loadingAuth}
          title={loadingAuth ? 'Loading' : 'Login'}
          type="submit"
          variant="filled"
          className="mt-12"
        />
      </form>
    </UnauthenticatedContainer>
  )
}
