import { IconProps } from '@/types/IconsType'

export default function SearchIcon({ className, width = '19', height = '18' }: IconProps) {
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
        d="M16.25 15.75L11.7501 11.25M13.25 7.5C13.25 10.3995 10.8995 12.75 8 12.75C5.1005 12.75 2.75 10.3995 2.75 7.5C2.75 4.6005 5.1005 2.25 8 2.25C10.8995 2.25 13.25 4.6005 13.25 7.5Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
