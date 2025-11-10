export type AllCarsCardProps = {
  name: string
  horsepower?: number
  onclick?: () => void
  onClickImage?: () => void
  type?: string
  imageUrl?: string
  imageAltText?: string
  onSeeDetails?: () => void
  btnTitle: string
}
