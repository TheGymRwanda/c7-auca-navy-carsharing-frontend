import { useContext } from 'react'
import { AuthContext } from '@/context/LoggedInAuthContext'
import { AppRoutes } from '@/types/AppRoutesType'
import ErrorCar from '@/assets/ErrorCar'
import Button from '@/components/Button'

export default function Error() {
  const { loggedIn } = useContext(AuthContext)

  return (
    <div className="mx-auto flex min-h-screen flex-col gap-8 py-20 text-center font-lora text-gray-100">
      <h1 className=" pb-6 pt-12 text-5xl">OOOOOPS!</h1>
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
      <Button
        type="link"
        title="Go Back"
        to={AppRoutes.home}
        hasBackground={true}
        className="text-md py-1.8 mx-auto w-[89%] rounded-full border font-lora font-bold text-gray-900"
      />
    </div>
  )
}
