import React from 'react'

interface AuthInputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
}

function AuthInputs({ type = 'text', placeholder, value, onChange, icon }: AuthInputProps) {
  return (
    <div className="flex items-center border rounded-full px-5 py-4 w-full bg-[#64A1C0]">
      {icon && <div className="mr-2 text-white">{icon}</div>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 outline-none bg-transparent text-black placeholder-white/80 font-semibold"
      />
    </div>
  )
}

export default AuthInputs
