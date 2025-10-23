import Button from '@/components/ui/Button'
import { AppRoutes } from '@/types/AppRoutesType'
import Hero from '@/components/ui/Hero'
import NoAuthPageContainer from '@/components/ui/NoAuthPageContainer'

export default function Landing() {
  return (
    <NoAuthPageContainer>
      <Hero />
      <p className="py-12 pb-24 text-2xl">
        Start sharing your Monis <span className="block"> with the world</span>
      </p>
      <Button title="Log In" to={AppRoutes.login} variant="filled" />
    </NoAuthPageContainer>
  )
}
