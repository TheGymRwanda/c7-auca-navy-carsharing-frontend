import CarIcon from '@/assets/CarIcon'
import Button from '@/components/ui/Button'
import { AllCarsCardProps } from '@/types/AllCarsCard'
import MyCarDetailsItem from './MyCarDetailsItem'
import HorseIcon from '@/assets/HorseIcon'

export default function AllCarsCard({
  name,
  imageUrl,
  type,
  horsepower,
  onclick,
  imageAltText,
  onSeeDetails,
}: AllCarsCardProps) {
  return (
    <div className="bg-[#3e7591] px-4 py-2 rounded-lg">
      <div className="h-56 w-full flex justify-center rounded-[10px]">
        <img src={imageUrl} alt={imageAltText} className="h-full w-auto rounded-md" />
        <div className="flex h-full flex-col justify-around px-4">
          <h1 className="text-start text-2xl font-bold text-white">{name}</h1>
          <MyCarDetailsItem title={type} icon={<CarIcon />} />
          <MyCarDetailsItem title={horsepower || 'N/A'} icon={<HorseIcon />} />

          <button onClick={onSeeDetails} className="font-bold text-[#f8fcad]">
            See Car Details
          </button>
        </div>
      </div>

      <Button title="Delete" className="border-warn-user text-yellow-500 mt-3" onClick={onclick} />
    </div>
  )
}
