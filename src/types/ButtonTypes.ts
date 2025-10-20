export type ButtonProps = {
  title: string
  to?: string
  disabled?: boolean
  variant?: 'filled' | 'outlined'
  onClick?: () => void
  className?: string
}
