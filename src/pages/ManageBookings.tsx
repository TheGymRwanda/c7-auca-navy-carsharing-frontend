import { useContext, useEffect } from 'react'
import useAuth from '@/hooks/useAuth'

import PageContainer from '@/components/container/PageContainer'
import PageHeading from '@/components/ui/PageHeading'
import { AuthContext } from '@/context/AuthenticationContext'

export default function ManageBookings() {
  const { logout } = useContext(AuthContext)
  const [{ error: authError, loading: loadAuth }] = useAuth()
  useEffect(() => {
    if (authError) {
      logout?.()
    }
  }, [loadAuth])
  return (
    <PageContainer>
      <PageHeading name="Manage Bookings" />
    </PageContainer>
  )
}
