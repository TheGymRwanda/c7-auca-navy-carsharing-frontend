import { ReactNode } from 'react'

export type AuthContextType = {
  loggedIn: boolean
  login?: (event: React.FormEvent) => void
  logout?: () => void
  loadingAuth?: boolean
  errorLogin?: boolean
  userId?: number
}

export type AuthContextChildren = {
  children?: ReactNode
}
