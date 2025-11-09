import { useContext, useEffect } from 'react'
import useAuth from '@/hooks/useAuth'

import PageContainer from '@/components/container/PageContainer'
import PageHeading from '@/components/ui/PageHeading'
import { AuthContext } from '@/context/AuthenticationContext'

export default function MyCarsBookings() {
  const { logout } = useContext(AuthContext)
  const [{ error: authError, loading: loadAuth }] = useAuth()
  useEffect(() => {
    if (authError) {
      logout?.()
    }
  }, [loadAuth])
  return (
    <PageContainer>
      <PageHeading name="My Cars Bookings" />
    </PageContainer>
  )
}
