import { useContext } from 'react'

import { useUser } from '@/hooks'
import { AuthContext } from '@/context/AuthenticationContext'

import AuthenticatedContainer from '@/components/container/AuthenticatedContainer'
import PageHeading from '@/components/ui/PageHeading'

export default function MyCarsBookings() {
  const { logout, userId } = useContext(AuthContext)
  const [{ error }] = useUser(userId)

  if (error?.status === 400) logout?.()
  return (
    <AuthenticatedContainer>
      <PageHeading name="My Cars Bookings" />
    </AuthenticatedContainer>
  )
}
