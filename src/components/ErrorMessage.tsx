interface ErrorMessageProps {
  message?: string
  className?: string
}

export default function ErrorMessage({ message, className = '' }: ErrorMessageProps) {
  if (!message) return null

  return <p className={`text-red-400 text-sm mt-1 ${className}`}>{message}</p>
}
