import Logo from '../assets/Logo'
import ProfileIcon from '../assets/ProfileIcon'
import clsx from 'clsx'
import NavigationMenu from './menu-bar/NavigationMenu'
import { useContext, useState } from 'react'
import { contextAuth } from '../context/AuthContext'

export default function Header() {
  const { loggedIn } = useContext(contextAuth)
  const [showNavgation, setShowNavigation] = useState(false)
  const headerClasses = clsx(
    'absolute flex w-full items-center rounded-b-xl bg-gray-800 px-4 py-3 text-white',
    {
      'justify-between': loggedIn,
      'justify-center py-6': !loggedIn,
    },
  )
  function handleShowNavMenu() {
    setShowNavigation(prev => !prev)
  }
  return (
    <>
      <header className={headerClasses}>
        {loggedIn && (
          <button onClick={handleShowNavMenu}>{showNavgation ? 'Close' : 'Menu'}</button>
        )}

        {loggedIn && (
          <div>
            <ProfileIcon />
          </div>
        )}
      </header>
      <div className="absolute inset-x-0 mx-auto w-[20%] rounded-b-full bg-gray-800  py-2 pb-5">
        <Logo className="w-[99%]" />
      </div>
      <NavigationMenu showNavigation={showNavgation} />
    </>
  )
}
