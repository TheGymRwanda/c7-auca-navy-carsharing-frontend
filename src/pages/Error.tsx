import { contextAuth } from '../context/AuthContext'
import { useContext } from 'react'
import ErrorCar from '../assets/ErrorCar'
import Button from '../components/Button'

export default function Error() {
  const { setLoggedIn, loggedIn } = useContext(contextAuth)
  function handleLogin() {
    setLoggedIn(prev => !prev)
  }
  return (
    <div className="mx-auto flex min-h-screen flex-col gap-8 py-20 text-center font-lora text-gray-100">
      {/* the button below simulates logging the user in and out, it can be removed after logging in functionality is implemented */}
      <button onClick={handleLogin}>{loggedIn ? 'Logout' : 'Login'}</button>
      <h1 className=" pb-6 pt-12 text-5xl">OOOOOPS!</h1>
      <ErrorCar className="mx-auto" />
      <p className="py-6 text-2xl">
        {loggedIn ? (
          <span>
            Something went wrong.<span className="block">We will solve your issue soon.</span>
          </span>
        ) : (
          `                Please login first.`
        )}
      </p>
      <Button
        type="link"
        title="Go Back"
        to={loggedIn ? '/' : '/login'}
        className="text-md py-1.8 mx-auto w-[89%] rounded-full border bg-white font-lora font-bold text-gray-900"
      />
    </div>
  )
}
