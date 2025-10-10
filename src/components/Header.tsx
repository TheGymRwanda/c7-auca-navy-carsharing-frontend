import { useContext } from 'react'

import { contextAuth } from '../context/AuthContext'
import Logo from '../assets/Logo'
import ProfileIcon from '../assets/ProfileIcon'
import NavigationMenu from './menu-bar/NavigationMenu'

function AuthenticatedHeader() {
  return (
    <>
      <header className="absolute flex w-full items-center justify-between  rounded-b-xl bg-gray-800 px-4 py-3 text-white">
        <div>
          <NavigationMenu />
        </div>
        <div>
          <ProfileIcon />
        </div>
      </header>
      <div className="absolute inset-x-0 top-0 mx-auto w-[20%] rounded-b-full bg-gray-800 py-4  pb-5">
        <Logo className="w-[99%]" />
      </div>
    </>
  )
}

function UnauthenticatedHeader() {
  return (
    <header className="absolute flex w-full items-center justify-center rounded-b-xl bg-gray-800 px-4 py-7 text-white">
      <div className="absolute mx-auto w-[20%] rounded-b-full bg-gray-800 py-8 pb-5">
        <Logo className="w-[99%]" />
      </div>
    </header>
  )
}
export default function Header() {
  const { loggedIn } = useContext(contextAuth)

  return <>{loggedIn ? <AuthenticatedHeader /> : <UnauthenticatedHeader />}</>
}
