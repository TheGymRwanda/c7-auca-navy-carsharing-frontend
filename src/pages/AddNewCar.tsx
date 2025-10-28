import { useContext } from 'react'

import { useUser } from '@/hooks'
import { AuthContext } from '@/context/LoggedInAuthContext'

import AuthenticatedContainer from '@/components/container/AuthenticatedContainer'
import PageHeading from '@/components/ui/PageHeading'
import '@/components/NewCarForm'
import NewCarForm from '@/components/NewCarForm'

export default function AddNewCar() {
  const { logout, userId } = useContext(AuthContext)
  const [{ error }] = useUser(userId)

  if (error?.status === 400) logout?.()
  return (
    <AuthenticatedContainer>
      <PageHeading name="Add New Car" />
      <NewCarForm/>
    </PageContainer>
  )
}
