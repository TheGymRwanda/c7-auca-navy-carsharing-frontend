import { useContext, useEffect } from 'react'
import useAuth from '@/hooks/useAuth'
import { AuthContext } from '@/context/AuthenticationContext'
import PageContainer from '@/components/container/PageContainer'
import PageHeading from '@/components/ui/PageHeading'

export default function AddNewCar() {
  const { logout } = useContext(AuthContext)
  const [{ error: authError, loading: loadAuth }] = useAuth()
  useEffect(() => {
    if (authError) {
      logout?.()
    }
  }, [loadAuth])
  return (
    <PageContainer>
      <PageHeading name="Add New Car" />
    </PageContainer>
  )
}
