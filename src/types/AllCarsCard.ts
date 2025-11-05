export type AllCarsCardProps = {
  name: string
  imageUrl: string
  type: string
  horsepower?: number
  onclick?: () => void
  imageAltText?: string
  onSeeDetails?: () => void
}
