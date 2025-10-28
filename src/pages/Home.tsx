import { useContext } from 'react'

import { useUser } from '@/hooks'
import { AuthContext } from '@/context/LoggedInAuthContext'
import { AppRoutes } from '@/types/AppRoutesType'

import AuthenticatedContainer from '@/components/container/AuthenticatedContainer'
import Button from '@/components/ui/Button'
import Hero from '@/components/ui/Hero'

export default function Home() {
  const { logout, userId } = useContext(AuthContext)
  const [{ error, data }] = useUser(userId)

  if (error?.status === 400) logout?.()

  return (
    <AuthenticatedContainer>
      <Hero />
      <p className="py-12 text-2xl">
        Hello {data?.name ? data?.name : 'User'}!
        <span className="block"> What are you up to today?</span>
      </p>
      <Button title="Book Car" to={AppRoutes.bookCar} variant="filled" />
      <span>or</span>
      <Button title="See my Cars" to={AppRoutes.seeMyCars} />
      <Button title="See my Bookings" to={AppRoutes.myBookings} />
    </AuthenticatedContainer>
  )
}
