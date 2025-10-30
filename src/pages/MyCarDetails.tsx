import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchWithAuth } from '@/util/auth'
import CarIcon from '@/assets/CarIcon'
import Attention from '@/assets/Attention.png'
import licenseplate from '@/assets/LicensePlate.png'
import HorseIcon from '@/assets/HorseIcon'
import { ChevronBackIcon } from '@/assets/ChevronBackIcon'
import FuelIcon from '@/assets/FuelIcon'
import ProfileIcon from '@/assets/ProfileIcon'
import Button from '@/components/ui/Button'
import { Car, CarType } from '@/types/CarTypes'
import Error from '@/pages/Error'
import MyCarDetailsItem from '@/components/ui/MyCarDetailsItem'

export default function MyCarDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [car, setCar] = useState<Car | null>(null)
  const [carType, setCarType] = useState<CarType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true
    const fetchCarDetails = async () => {
      try {
        const carData = (await fetchWithAuth(`/cars/${id}`)) as Car
        if (!isMounted) return
        setCar(carData)

        if (carData?.carTypeId) {
          const typeData = (await fetchWithAuth(`/car-types/${carData.carTypeId}`)) as CarType
          if (!isMounted) return
          setCarType(typeData)
        }
      } catch (error) {
        console.error('Error fetching car details:', error)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchCarDetails()

    return () => {
      isMounted = false
    }
  }, [id])

  if (loading) return <p className="mt-10 text-center text-white">Loading car details...</p>
  if (!car) return <Error />
  if (!carType) return <p className="mt-10 text-center text-gray-300">Car type not found.</p>

  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b to-sky-700 text-white">
      <div className="mt-6 flex w-full items-center gap-2 px-6">
        <button onClick={() => navigate(-1)} className="mt-14">
          <ChevronBackIcon />
        </button>
        <h1 className="mx-auto mt-14 font-lora text-2xl">DETAILS</h1>
      </div>

      <div className="mt-6 mx-auto">
        <img
          src={carType.imageUrl || '/placeholder-car.png'}
          alt={car.name}
          className="max-h-64 rounded-xl object-cover"
        />
      </div>

      <div className="mt-6 md:w-auto w-full mx-auto space-y-3 md:px-0 px-10 text-left">
        <h2 className="font-lora text-lg">{car.name}</h2>

        <div className="flex md:w-auto md:space-x-32 mx-auto md:flex-row flex-col">
          <div className="md:w-auto w-full">
            <MyCarDetailsItem title={car.ownerId} icon={<ProfileIcon />} />
            <MyCarDetailsItem title={carType.name} icon={<CarIcon />} />
            <MyCarDetailsItem title={car.licensePlate} img={licenseplate} />
          </div>

          <div className="md:w-auto w-full">
            <MyCarDetailsItem title={car.horsepower} icon={<HorseIcon />} />
            <MyCarDetailsItem title={car.fuelType} icon={<FuelIcon />} />

            {car.state && <MyCarDetailsItem title={car.state} img={Attention} />}
          </div>
        </div>

        <div className="flex gap-x-4 flex-row">
          <Button title="Edit Car" variant="filled" to={`/cars/ownded/${id}/edit`} />
          <Button title="Delete Car" variant="outlined" to={`/cars/ownded/${id}/edit`} />
        </div>
      </div>
    </div>
  )
}
