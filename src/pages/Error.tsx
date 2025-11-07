import { useContext } from 'react'
import { AuthContext } from '@/context/AuthenticationContext'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@/types/AppRoutesType'
import Button from '@/components/ui/Button'
import PageHeading from '@/components/ui/PageHeading'
import ErrorCar from '@/assets/ErrorCar'
import PageContainer from '@/components/container/PageContainer'

export default function Error() {
  const { loggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleNavigation = () => {
    if (loggedIn) {
      navigate(-1)
    } else {
      navigate(AppRoutes.login)
    }
  }

  return (
    <PageContainer>
      <PageHeading name="OOOOOPS!" />
      <ErrorCar className="mx-auto" />
      <p className="py-6 text-2xl">
        {loggedIn ? (
          <>
            <span>Something went wrong.</span>
            <span className="block">We will solve your issue soon.</span>
          </>
        ) : (
          <span>Please login first.</span>
        )}
      </p>

      <Button title="Go Back" onClick={handleNavigation} />
    </PageContainer>
  )
}
