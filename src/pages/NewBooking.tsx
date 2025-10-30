import { useContext } from 'react'

import { useUser } from '@/hooks'
import { AuthContext } from '@/context/LoggedInAuthContext'

import AuthenticatedContainer from '@/components/container/AuthenticatedContainer'
import PageHeading from '@/components/ui/PageHeading'

export default function NewBooking() {
  const { logout, userId } = useContext(AuthContext)
  const [{ error }] = useUser(userId)

  if (error?.status === 400) logout?.()
  return (
    <AuthenticatedContainer>
      <PageHeading name="Available Cars" />
    </AuthenticatedContainer>
  )
}
