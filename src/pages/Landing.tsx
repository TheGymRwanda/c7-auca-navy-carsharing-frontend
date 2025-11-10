import { AppRoutes } from '@/types/AppRoutesType'

import Button from '@/components/ui/Button'
import Hero from '@/components/ui/Hero'
import PageContainer from '@/components/container/PageContainer'

export default function Landing() {
  return (
    <PageContainer>
      <Hero />
      <p className="py-12 pb-24 text-2xl">
        Start sharing your Monis <span className="block"> with the world</span>
      </p>
      <Button title="Log In" to={AppRoutes.login} variant="filled" />
    </PageContainer>
  )
}
