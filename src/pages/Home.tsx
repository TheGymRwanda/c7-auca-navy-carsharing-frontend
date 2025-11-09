import { useContext } from 'react'
import { AuthContext } from '@/context/AuthenticationContext'
import { AppRoutes } from '@/types/AppRoutesType'

import PageContainer from '@/components/container/PageContainer'
import Button from '@/components/ui/Button'
import Hero from '@/components/ui/Hero'
import useAuth from '@/hooks/useAuth'
import { useEffect } from 'react'

export default function Home() {
  const { logout } = useContext(AuthContext)
  const [{ error: authError, loading: loadAuth }] = useAuth()

  useEffect(() => {
    if (authError) {
      logout?.()
    }
  }, [loadAuth])

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
