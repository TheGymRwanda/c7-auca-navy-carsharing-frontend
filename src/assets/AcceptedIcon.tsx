import { IconProps } from '@/types/IconsType'

export default function AcceptedIcon({ className, width = '19', height = '18' }: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.25 6.75L7.99999 12L5.74995 9.75M16.25 9C16.25 12.7279 13.2279 15.75 9.5 15.75C5.77208 15.75 2.75 12.7279 2.75 9C2.75 5.27208 5.77208 2.25 9.5 2.25C13.2279 2.25 16.25 5.27208 16.25 9Z"
        stroke="#FFFFFF"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
