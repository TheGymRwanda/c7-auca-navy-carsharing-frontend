import Button from '@/components/ui/Button'
import { AppRoutes } from '@/types/AppRoutesType'
import Hero from '@/components/ui/Hero'
import PageContainer from '@/components/ui/PageContainer'

export default function Home() {
  return (
    <PageContainer>
      <Hero />
      <p className="py-12 text-2xl">
        Hello Manuela! <span className="block"> What are you up to today?</span>
      </p>
      <Button title="Book Car" to={AppRoutes.bookCar} variant="filled" />
      <span>or</span>
      <Button title="See my Cars" to={AppRoutes.seeMyCars} />
      <Button title="See my Bookings" to={AppRoutes.myBookings} />
    </PageContainer>
  )
}
