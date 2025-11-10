import { useLocation, useNavigate } from 'react-router-dom'
import PageHeading from '@/components/ui/PageHeading'
import MyCarDetailsItem from '@/components/ui/MyCarDetailsItem'
import ProfileIcon from '@/assets/ProfileIcon'
import CarIcon from '@/assets/CarIcon'
import HorseIcon from '@/assets/HorseIcon'
import FuelIcon from '@/assets/FuelIcon'
import licenseplate from '@/assets/LicensePlate.png'
import Attention from '@/assets/Attention.png'
import PageContainer from '@/components/container/PageContainer'

export default function MyCarDetails() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const car = state?.car

  if (!car) {
    return (
      <div className="py-20 text-center text-white">
        <h1>Car details not found</h1>
        <button onClick={() => navigate(-1)} className="mt-4 underline">
          Go Back
        </button>
      </div>
    )
  }

  return (
    <PageContainer>
      <div className="flex w-full items-center justify-center lg:mx-auto lg:w-1/2">
        <PageHeading name={`Details`} back={true} />
      </div>

      <div className="mx-auto mt-6">
        <img src={state?.imageUrl} alt={car.name} className="max-h-64 rounded-xl object-cover" />
      </div>

      <div className="space-y-3 px-6 text-left md:mx-auto md:w-max">
        <h2 className="font-lora text-lg">{car.name}</h2>

        <div className="flex flex-col md:flex-row md:space-x-32">
          <div className="space-y-2">
            <MyCarDetailsItem title="You" icon={<ProfileIcon />} />
            <MyCarDetailsItem title={car.type} icon={<CarIcon />} />
            <MyCarDetailsItem title={car.licensePlate || 'N/A'} img={licenseplate} />
          </div>

          <div className="space-y-2">
            <MyCarDetailsItem title={car.horsepower || 'N/A'} icon={<HorseIcon />} />
            <MyCarDetailsItem title={car.fuelType || 'N/A'} icon={<FuelIcon />} />
            {car.state && <MyCarDetailsItem title={car.state} img={Attention} />}
          </div>
        </div>
      </div>
    </PageContainer>
  )
}
