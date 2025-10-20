import { IconProps } from '@/types/IconsType'

export default function PenIcon({ className, width = '24', height = '24' }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M18 10L21 7L17 3L14 6M18 10L8 20H4V16L14 6M18 10L14 6"
        stroke="#059669"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
