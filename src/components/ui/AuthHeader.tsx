import { AuthContextType } from '@/types/AuthTypes'
import Logo from '@/assets/Logo'
import ProfileIcon from '@/assets/ProfileIcon'
import NavigationMenu from '@/components/menu-bar/NavigationMenu'
import DesktopNav from '../menu-bar/DesktopNav'

export default function AuthHeader({ loggedIn }: AuthContextType) {
  return (
    <>
      <header
        className={`${
          loggedIn ? 'justify-between py-3' : 'justify-center py-7'
        } absolute flex w-full items-center rounded-b-xl bg-header-color px-4 py-3`}
      >
        {loggedIn ? (
          <>
            <div className="block lg:hidden">
              <NavigationMenu />
            </div>
            <div className="hidden w-full lg:block">
              <DesktopNav />
            </div>
            <div className="py-1.9 lg:pl-4">
              <ProfileIcon className="text-white" />
            </div>
          </>
        ) : (
          <div className="absolute rounded-b-full bg-header-color py-6">
            <Logo />
          </div>
        )}
      </header>
      {loggedIn && (
        <div className="relative flex justify-center">
          <div className="absolute rounded-b-full bg-header-color py-5">
            <Logo />
          </div>
        </div>
      )}
    </>
  )
}
