import { useContext } from 'react'
import { AuthContext } from '@/context/LoggedInAuthContext'
import Button from '@/components/ui/Button'
import { AppRoutes } from '@/types/AppRoutesType'
import Hero from '@/components/ui/Hero'
import PageContainer from '@/components/ui/PageContainer'
import AuthInputs from '@/components/AuthInputs'
import KeyIcon from '@/assets/KeyIcon'
import ProfileIcon from '@/assets/ProfileIcon'

export default function Login() {
  const { login } = useContext(AuthContext)

  return (
    <PageContainer>
      <Hero />
      <p className="pt-8 text-2xl">Log in</p>
      <AuthInputs placeholder="Username/e-mail" icon={<ProfileIcon />} type="text" />
      <AuthInputs
        placeholder="Password"
        icon={<KeyIcon className="text-white" />}
        type="password"
      />
      <Button title="Login" to={AppRoutes.home} onClick={login} variant="filled" />
    </PageContainer>
  )
}
