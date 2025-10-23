import { useContext } from 'react'

import { AuthContext } from '@/context/LoggedInAuthContext'
import { AppRoutes } from '@/types/AppRoutesType'
import ErrorCar from '@/assets/ErrorCar'
import Button from '@/components/ui/Button'
import PageHeading from '@/components/ui/PageHeading'

export default function Error() {
  const { loggedIn } = useContext(AuthContext)

  return (
    <div className="mx-auto flex min-h-screen flex-col gap-8 py-20 text-center font-lora text-gray-100">
      <PageHeading name="OOOOOPS!" />
      <ErrorCar className="mx-auto" />
      <p className="py-6 text-2xl">
        {loggedIn ? (
          <span>
            <span>Something went wrong.</span>
            <span className="block">We will solve your issue soon.</span>
          </span>
        ) : (
          <span>Please login first.</span>
        )}
      </p>
      <Button title="Go Back" to={AppRoutes.login} />
    </div>
  )
}
