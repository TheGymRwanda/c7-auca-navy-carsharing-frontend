import { Link } from 'react-router-dom'
import { contextAuth } from '../context/AuthContext'
import { useContext } from 'react'
import ErrorCar from '../assets/ErrorCar'

export default function Error() {
  const { setLoggedIn, loggedIn } = useContext(contextAuth)
  function handleLogin() {
    setLoggedIn(prev => !prev)
  }
  return (
    <main className="font-lora mx-auto flex min-h-screen flex-col gap-8 py-20 text-center text-gray-100">
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
      <Link
        to={loggedIn ? '/' : '/login'}
        className="mx-auto w-[90%] rounded-full border bg-white py-2 font-bold text-gray-800"
      >
        Go Back
      </Link>
    </main>
  )
}
