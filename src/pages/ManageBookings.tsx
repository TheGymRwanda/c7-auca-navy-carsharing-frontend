import PageContainer from '@/components/ui/PageContainer'
import PageHeading from '@/components/ui/PageHeading'
import { AuthContext } from '@/context/LoggedInAuthContext'
import { useUser } from '@/hooks'
import { useContext } from 'react'

export default function ManageBookings() {
  const { logout, userId } = useContext(AuthContext)
  const [{ error }] = useUser(userId)

  if (error?.status === 400) logout?.()
  return (
    <PageContainer>
      <PageHeading name="Manage Bookings" />
    </PageContainer>
  )
}
