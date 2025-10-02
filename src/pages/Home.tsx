import { Link } from 'react-router-dom'
// import { contextAuth } from "../context/AuthContext"
export default function Home() {
  //   const {setLoggedIn, loggedIn} = useContext(contextAuth);
  //   function handleLogin(){
  //     setLoggedIn(prev=>!prev)
  //   }
  return (
    <div className="font-lora mx-auto flex min-h-screen flex-col gap-8 py-20 text-center text-gray-100">
      {/* the button below simulates logging the user in and out, it can be removed after logging in functionality is implemented */}
      {/* <button onClick={handleLogin}>{loggedIn? "Logout":"Login"}</button> */}
      <h1 className="pb-16 pt-12 text-5xl">
        <span className="block">MONI</span>
        <span className="font-lora block italic">share</span>
      </h1>
      <p className="py-12 pb-24 text-2xl">
        Start sharing your Monis <span className="block"> with the world</span>
      </p>
      <Link
        to="/login"
        className="mx-auto w-[90%] rounded-full border bg-white py-2 font-bold text-gray-800"
      >
        Log In
      </Link>
    </div>
  )
}
