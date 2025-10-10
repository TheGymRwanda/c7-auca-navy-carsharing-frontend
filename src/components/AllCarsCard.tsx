import { Link } from 'react-router-dom'
import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'

type Props = {
  id: string
  name: string
  imageUrl: string
  owner: string
  type: string
}

const AllCarsCard = ({ id, name, imageUrl, owner, type }: Props) => (
  <div className="flex h-[220px] w-full rounded-[10px] bg-[#3e7591] px-4 py-2">
    <img src={imageUrl} className="h-full w-auto" />
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
)

export default AllCarsCard
