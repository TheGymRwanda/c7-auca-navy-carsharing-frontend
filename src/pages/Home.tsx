import { useContext } from 'react'
import { AuthContext } from '@/context/LoggedInAuthContext'
import Button from '@/components/ui/Button'
import { AppRoutes } from '@/types/AppRoutesType'
import Hero from '@/components/ui/Hero'
import PageContainer from '@/components/ui/PageContainer'

export default function Home() {
  const { login } = useContext(AuthContext)

  return (
    <PageContainer>
      <Hero />
      <p className="py-12 pb-24 text-2xl">
        Start sharing your Monis <span className="block"> with the world</span>
      </p>
      <Button title="Log In" to={AppRoutes.login} onClick={login} />
    </PageContainer>
  )
}
