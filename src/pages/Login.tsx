import { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/LoggedInAuthContext'
import Button from '@/components/ui/Button'
import Hero from '@/components/ui/Hero'
import AuthInputs from '@/components/AuthInputs'
import KeyIcon from '@/assets/KeyIcon'
import ProfileIcon from '@/assets/ProfileIcon'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@/types/AppRoutesType'
import NoAuthPageContainer from '@/components/ui/NoAuthPageContainer'

export default function Login() {
  const { login, loadingAuth, loggedIn, errorLogin } = useContext(AuthContext)
  const navigate = useNavigate()
  useEffect(() => {
    if (loggedIn) {
      navigate(AppRoutes.home)
    }
  }, [loadingAuth])
  return (
    <NoAuthPageContainer>
      <Hero />
      <p className="pt-8 text-2xl">Log in</p>
      <form onSubmit={login}>
        <AuthInputs
          placeholder="Username/e-mail"
          icon={<ProfileIcon className="fixed ml-4 mt-4 inline" />}
          type="text"
          name="user_name_email"
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
    </NoAuthPageContainer>
  )
}
