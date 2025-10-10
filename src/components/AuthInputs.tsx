import React from 'react'

interface AuthInputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
  error?: string
}

function AuthInputs({ type = 'text', placeholder, value, onChange, icon }: AuthInputProps) {
  return (
    <div className="flex w-full items-center rounded-full border bg-[#64A1C0] px-5 py-4">
      {icon && <div className="mr-2 text-white">{icon}</div>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="flex-1 bg-transparent font-semibold text-black outline-none placeholder:text-white/80"
      />
    </div>
  )
}

export default AuthInputs
