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
          icon={<ProfileIcon />}
          type="text"
          name="user_name_email"
        />
        <AuthInputs
          placeholder="Password"
          icon={<KeyIcon className="text-white" />}
          type="password"
          name="password"
        />
        {errorLogin && (
          <p>
            <span>Your login attempt was not successful.</span>
            <span>Please make sure your user name and password are correct</span>
          </p>
        )}
        <Button title={loadingAuth ? 'Loading' : 'Login'} type="submit" variant="filled" />
      </form>
    </NoAuthPageContainer>
  )
}
