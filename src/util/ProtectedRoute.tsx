import { useContext, useEffect } from 'react'

import { AuthContext } from '@/context/AuthenticationContext'
import { useNavigate } from 'react-router-dom'
import { AppRoutes } from '@/types/AppRoutesType'
import { Children } from '@/types/GeneralTypes'

export default function ProtectedRoute({ children }: Children) {
  const navigate = useNavigate()
  const { loggedIn } = useContext(AuthContext)
  useEffect(() => {
    if (!loggedIn) {
      navigate(AppRoutes.notFoundPage)
      return
    }
  })
  return <> {children} </>
}
