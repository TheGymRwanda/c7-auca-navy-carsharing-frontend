import clsx from 'clsx'
import { Link } from 'react-router-dom'

type Props = {
  className?: string
  title: string
  onClick?: () => void
  disabled?: boolean
  hasBackground?: boolean
  type?: 'button' | 'link'
  to?: string
}

const Button = ({
  className = '',
  title = 'button',
  onClick,
  disabled = false,
  hasBackground = false,
  type = 'button',
  to = '#',
}: Props) => {
  const baseClasses = 'w-full rounded-full border-2 py-2 text-lg font-semibold text-center'

  const variantClasses = hasBackground
    ? disabled
      ? 'border-gray-200 bg-gray-200 text-cyan-800'
      : 'border-white bg-white text-cyan-800 hover:border-gray-100 hover:bg-gray-100'
    : 'border-white text-white hover:bg-white hover:text-cyan-800 hover:transition hover:delay-100'

  const finalClasses = clsx(baseClasses, className, variantClasses)

  switch (type) {
    case 'link':
      return (
        <Link to={to} className={finalClasses} onClick={onClick}>
          {title}
        </Link>
      )

    default:
      return (
        <button className={finalClasses} disabled={disabled} onClick={onClick}>
          {title}
        </button>
      )
  }
}

export default Button
