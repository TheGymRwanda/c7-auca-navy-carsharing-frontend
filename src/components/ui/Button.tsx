import { NavLink } from 'react-router-dom'
import clsx from 'clsx'
import { ButtonProps } from '@/types/ButtonTypes'

const Button = ({
  title,
  to,
  disabled = false,
  variant = 'outlined',
  onClick,
  className = '',
  type = 'button',
  children,
}: ButtonProps) => {
  const baseClasses =
    'w-5/6 md:w-2/3 lg:w-1/2 mx-auto rounded-full border-2 py-2 text-lg font-semibold text-center transition-all duration-300'

  const variantClasses = clsx({
    'border-white bg-white text-cyan-800 hover:bg-gray-200 hover:border-gray-100':
      variant === 'filled' && !disabled,
    'border-white text-white hover:bg-white hover:text-cyan-800 hover:border-white':
      variant === 'outlined' && !disabled,
    'border-gray-200 bg-gray-200 text-cyan-800 cursor-not-allowed': disabled,
  })

  const content = children || title

  if (to) {
    return (
      <NavLink
        to={to}
        onClick={onClick}
        className={clsx(baseClasses, variantClasses, className)}
      >
        {content}
      </NavLink>
    )
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={clsx(baseClasses, variantClasses, className)}
    >
      {content}
    </button>
  )
}

export default Button
