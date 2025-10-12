import { useContext } from 'react'
import { AuthContext } from '@/context/LoggedInAuthContext'
import Button from '@/components/Button'
import { AppRoutes } from '@/types/AppRoutesType'

export default function Home() {
  const { setLoggedIn } = useContext(AuthContext)

  function handleLogin() {
    setLoggedIn(prev => !prev)
  }

  return (
    <div className="flex min-h-screen flex-col gap-8 py-20 text-center font-lora text-gray-100">
      <h1 className="pb-16 pt-14 text-5xl">
        <span className="block">MONI</span>
        <span className="block font-lora italic">share</span>
      </h1>
      <p className="py-12 pb-24 text-2xl">
        Start sharing your Monis <span className="block"> with the world</span>
      </p>
      <Button
        type="link"
        title="Log In"
        to={AppRoutes.login}
        hasBackground={true}
        className="py-1.8 mx-auto w-[90%] rounded-full font-lora font-bold text-gray-800"
        onClick={handleLogin}
      />
    </div>
  )
}
