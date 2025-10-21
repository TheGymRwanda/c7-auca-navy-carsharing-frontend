import React from 'react'

interface AuthInputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
  error?: string
  name?: string
}

function AuthInputs({ type = 'text', placeholder, value, onChange, name }: AuthInputProps) {
  return (
    <div>
      {/* {icon && <div className="mr-2 text-white">{icon}</div>} */}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mb-4 text-black"
        name={name}
        required
      />
    </div>
  )
}

export default AuthInputs
