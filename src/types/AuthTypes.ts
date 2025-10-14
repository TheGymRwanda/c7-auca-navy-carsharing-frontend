export type AuthContextType = {
  loggedIn: boolean
  login?: () => void
  logout?: () => void
}
