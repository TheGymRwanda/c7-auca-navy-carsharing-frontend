import { IconProps } from '@/types/IconsType'

export function ChevronBackIcon({ className, width = '9', height = '14' }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
    >
      <path d="M7.5 1L1.5 7L7.5 13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
