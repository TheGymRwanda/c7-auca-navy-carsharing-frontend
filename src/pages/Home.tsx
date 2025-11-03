import { AppRoutes } from '@/types/AppRoutesType'

import PageContainer from '@/components/container/PageContainer'
import Button from '@/components/ui/Button'
import Hero from '@/components/ui/Hero'

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <p className="py-12 text-2xl">
        Hello User!
        <span className="block"> What are you up to today?</span>
      </p>
      <Button title="Book Car" to={AppRoutes.bookCar} variant="filled" />
      <span>or</span>
      <Button title="See my Cars" to={AppRoutes.seeMyCars} />
      <Button title="See my Bookings" to={AppRoutes.myBookings} />
    </PageContainer>
  )
}
