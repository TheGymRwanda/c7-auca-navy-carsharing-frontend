import { AuthContext } from '@/context/LoggedInAuthContext'
import { AppRoutes } from '@/types/AppRoutesType'
import { PropsWithChildren, useContext } from 'react'
import { Navigate } from 'react-router-dom'

export default function NoAuthPageContainer({ children }: PropsWithChildren) {
  const { loggedIn } = useContext(AuthContext)
  return (
    <div className="flex min-h-screen flex-col gap-8 py-20 text-center font-lora text-gray-100">
      {loggedIn ? <Navigate to={AppRoutes.home} /> : children}
    </div>
  )
}
