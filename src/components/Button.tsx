type Props = {
  className?: string
  title?: string
  onClick?: () => void
  disabled?: boolean
  hasBackground?: boolean
}

const Button = ({
  className = '',
  title = 'button',
  onClick,
  disabled = false,
  hasBackground = false,
}: Props) => (
  <button
    className={`
    w-full rounded-full border-2 py-2 text-lg font-semibold
    ${className}
    ${
      hasBackground
        ? disabled
          ? 'border-gray-200 bg-gray-200 text-cyan-800'
          : 'border-white bg-white text-cyan-800 hover:border-gray-100 hover:bg-gray-100'
        : 'border-white text-white hover:bg-white hover:text-cyan-800 hover:transition hover:delay-100'
    }
  `}
    disabled={disabled}
    onClick={onClick}
  >
    {title}
  </button>
)

export default Button
