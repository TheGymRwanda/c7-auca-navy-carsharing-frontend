import { type Dispatch, type SetStateAction } from 'react'

export type AuthValues = {
  loggedIn: boolean
  setLoggedIn: Dispatch<SetStateAction<boolean>>
}
