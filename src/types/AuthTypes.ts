import { SyntheticEvent } from 'react'

export type AuthContextType = {
  loggedIn: boolean
  login?: (event: SyntheticEvent<HTMLFormElement>) => void
  logout?: () => void
  loadingAuth?: boolean
  errorLogin?: boolean
  userId?: number
}
