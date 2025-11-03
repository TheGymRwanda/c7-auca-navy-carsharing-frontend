import { useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAxios from 'axios-hooks'
import Error from '@/pages/Error'
import ProfileIcon from '@/assets/ProfileIcon'
import CarIcon from '@/assets/CarIcon'
import HorseIcon from '@/assets/HorseIcon'
import FuelIcon from '@/assets/FuelIcon'
import Attention from '@/assets/Attention.png'
import licenseplate from '@/assets/LicensePlate.png'
import { ChevronBackIcon } from '@/assets/ChevronBackIcon'
import Button from '@/components/ui/Button'
import MyCarDetailsItem from '@/components/ui/MyCarDetailsItem'
import { Car } from '@/types/CarTypes'
import { apiUrl } from '@/util/apiUrl'
import { useCarTypes } from '@/hooks'
import { getAuthToken } from '@/util/auth'

export default function CarDetails() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [{ data: car, loading, error }] = useAxios<Car>({
    url: `${apiUrl}/cars/${id}`,
    headers: { Authorization: `Bearer ${getAuthToken()}` },
  })

  const [{ data: carTypes }] = useCarTypes()

  const carTypeDetails = useMemo(() => {
    if (!car || !carTypes) return undefined
    const foundType = carTypes.find(t => t.id === Number(car.carTypeId))
    return foundType ? { imageUrl: foundType.imageUrl, name: foundType.name } : undefined
  }, [car, carTypes])

  if (loading) return <p className="mt-10 text-center text-white">Loading car details...</p>
  if (error || !car) return <Error />
  if (!carTypeDetails) return <p className="mt-10 text-center text-gray-300">Car type not found.</p>

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b to-sky-700 text-white">
      <div className="mt-6 flex w-full items-center gap-2 px-6">
        <button onClick={() => navigate(-1)} className="mt-14">
          <ChevronBackIcon />
        </button>
        <h1 className="mx-auto mt-14 font-lora text-2xl">DETAILS</h1>
      </div>

      <div className="mx-auto mt-6">
        <img
          src={carTypeDetails.imageUrl || '/placeholder-car.png'}
          alt={car.name}
          className="max-h-64 rounded-xl object-cover"
        />
      </div>

      <div className="mx-auto mt-6 w-full max-w-xl space-y-3 px-6 text-left">
        <h2 className="font-lora text-lg">{car.name}</h2>

        <div className="flex flex-col md:flex-row md:space-x-32">
          <div className="space-y-2">
            <MyCarDetailsItem title={car.ownerId} icon={<ProfileIcon />} />
            <MyCarDetailsItem title={carTypeDetails.name} icon={<CarIcon />} />
            <MyCarDetailsItem title={car.licensePlate} img={licenseplate} />
          </div>

          <div className="space-y-2">
            <MyCarDetailsItem title={car.horsepower} icon={<HorseIcon />} />
            <MyCarDetailsItem title={car.fuelType} icon={<FuelIcon />} />
            {car.state && <MyCarDetailsItem title={car.state} img={Attention} />}
          </div>
        </div>

        <div className="my-4 flex gap-4 md:w-5/6">
          <Button title="Edit Car" variant="filled" to={`/cars/owned/${id}/edit`} />
          <Button title="Delete Car" variant="outlined" to={`/cars/owned/${id}/edit`} />
        </div>
      </div>
    </div>
  )
}
