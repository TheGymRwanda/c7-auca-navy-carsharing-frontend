import React from 'react'

interface AuthInputProps {
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: React.ReactNode
  error?: string
  name?: string
  required?: boolean
}

function AuthInputs({
  type = 'text',
  placeholder,
  value,
  onChange,
  name,
  icon,
  required,
}: AuthInputProps) {
  return (
    <div className="relative">
      {icon && <span>{icon}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mx-auto mb-6 w-5/6 rounded-full bg-input px-14  py-4 text-white outline-none placeholder:text-white md:w-2/3 lg:w-1/2"
        name={name}
        required={required}
      />
    </div>
  )
}

export default AuthInputs
