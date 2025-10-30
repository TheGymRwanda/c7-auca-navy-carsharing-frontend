import { Link } from 'react-router-dom'
import ProfileIcon from '@/assets/ProfileIcon'
import CarIcon from '@/assets/CarIcon'
import Button from '@/components/ui/Button'
import { AllCarsCardProps } from '@/types/AllCarsCard'

export default function AllCarsCard({
  id,
  name,
  imageUrl,
  owner,
  type,
  showDeleteBtn,
  onclick,
  imageAltText,
}: AllCarsCardProps) {
  return (
    <div className="bg-[#3e7591] px-4 py-2">
      <div className="flex h-56 w-full justify-center rounded-[10px]">
        <img src={imageUrl} alt={imageAltText} className="h-full w-auto" />
        <div className="flex h-full flex-col justify-around">
          <h1 className="text-start text-2xl">{name}</h1>
          <div className="flex">
            <ProfileIcon />
            <h2>{owner}</h2>
          </div>
          <div className="flex">
            <CarIcon />
            <h2>{type}</h2>
          </div>
          <Link to={`/cars/${id}`} className="font-bold text-[#f8fcad]">
            Show details
          </Link>
        </div>
      </div>
      {showDeleteBtn && (
        <Button title="Delete" className="border-warn-user text-yellow-500" onClick={onclick} />
      )}
    </div>
  )
}
