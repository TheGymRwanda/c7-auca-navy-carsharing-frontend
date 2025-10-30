export type AllCarsCardProps = {
  id: string | number
  name: string
  imageUrl: string
  owner: string
  type: string
  showDeleteBtn?: boolean
  onclick?: () => void
  imageAltText?: string
}
