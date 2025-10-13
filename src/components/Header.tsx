import { useContext } from 'react'

import { AuthContext } from '@/context/LoggedInAuthContext'
import Logo from '@/assets/Logo'
import ProfileIcon from '@/assets/ProfileIcon'
import NavigationMenu from '@/components/menu-bar/NavigationMenu'

function AuthenticatedHeader() {
  return (
    <>
      <header className="absolute flex w-full items-center justify-between rounded-b-xl bg-header-color px-4 py-3">
        <div>
          <NavigationMenu />
        </div>
        <div>
          <ProfileIcon className="text-white" />
        </div>
      </header>
      <div className="relative flex justify-center">
        <div className="absolute rounded-b-full bg-header-color py-5">
          <Logo />
        </div>
      </div>
    </>
  )
}

function UnauthenticatedHeader() {
  return (
    <header className="absolute flex w-full items-center justify-center rounded-b-xl bg-header-color px-4 py-7">
      <div className="absolute rounded-b-full bg-header-color py-6">
        <Logo />
      </div>
    </header>
  )
}
export default function Header() {
  const { loggedIn } = useContext(AuthContext)

  return <>{loggedIn ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}</>
}
