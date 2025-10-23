import { useContext } from 'react'
import { useUser } from '@/hooks'

import PageContainer from '@/components/ui/PageContainer'
import PageHeading from '@/components/ui/PageHeading'
import { AuthContext } from '@/context/LoggedInAuthContext'

export default function NewBooking() {
  const { logout, userId } = useContext(AuthContext)
  const [{ error }] = useUser(userId)

  if (error?.status === 400) logout?.()
  return (
    <PageContainer>
      <PageHeading name="Available Cars" />
    </PageContainer>
  )
}
