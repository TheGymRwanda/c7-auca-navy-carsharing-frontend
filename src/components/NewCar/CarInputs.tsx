import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'

interface CarInputsProps {
  label: string
  type?: React.HTMLInputTypeAttribute
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
  hasIcon?: boolean
  required?: boolean
  disabled?: boolean
}

function CarInputs({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  className = '',
  hasIcon = false,
  required = false,
  disabled = false,
}: CarInputsProps) {
  return (
    <div className={`text-left ${className}`}>
      <label className="block text-white mb-2 ml-1 font-sans">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="flex items-center rounded-full bg-input  px-6 py-5">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className="flex-1 bg-transparent text-white outline-none placeholder:text-white/80 placeholder:text-left font-sans disabled:opacity-50"
        />
        {hasIcon && <FaAngleDown className="text-white ml-2" />}
      </div>
    </div>
  )
}

export default CarInputs
