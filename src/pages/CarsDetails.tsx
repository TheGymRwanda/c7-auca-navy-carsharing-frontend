import { useParams, useNavigate } from 'react-router-dom'
import { fetchWithAuth } from '../utils/api'
import { useEffect, useState } from 'react'
import CarIcon from '../assets/CarIcon'
import Attention from '../assets/Attention.png'
import licenseplate from '../assets/LicensePlate.png'
import HorseIcon from '../assets/HorseIcon'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import FuelIcon from '../assets/FuelIcon'
import ProfileIcon from '../assets/ProfileIcon'
import { Car, CarType } from '../utils/types'

export default function CarsDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [car, setCar] = useState<Car | null>(null)
  const [carType, setCarType] = useState<CarType | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mounted = true
    async function fetchCarDetails() {
      try {
        const carData = (await fetchWithAuth(`/cars/${id}`)) as Car
        if (!mounted) return
        setCar(carData)

        if (carData?.carTypeId) {
          const typeData = (await fetchWithAuth(`/car-types/${carData.carTypeId}`)) as CarType
          if (!mounted) return
          setCarType(typeData)
        }
      } catch (error) {
        console.error('Error fetching car details:', error)
      } finally {
        if (mounted) setLoading(false)
      }
    }

    fetchCarDetails()
  }, [id])

  if (loading) return <p className="mt-10 text-center text-white">Loading car details...</p>
  if (!car) return <p className="mt-10 text-center text-gray-300">Car not found.</p>

  if (!carType) return <p className="mt-10 text-center text-gray-300">Car type not found.</p>
  return (
    <div className="flex min-h-screen flex-col items-center bg-gradient-to-b to-sky-700 text-white">
      <div className="mt-6 flex w-full items-center gap-2 px-6">
        <button onClick={() => navigate(-1)} className="mt-14">
          <ChevronBackIcon />
        </button>
        <h1 className="mx-auto mt-14 font-lora text-2xl">DETAILS</h1>
      </div>

      <div className="mt-6">
        <img
          src={carType.imageUrl || '/placeholder-car.png'}
          alt={car.name}
          className="max-h-64 rounded-xl object-cover"
        />
      </div>

      <div className="mt-6 w-full space-y-3 px-10 text-left">
        <h2 className="font-lora text-lg">{car.name}</h2>

        <div className="flex items-center gap-2">
          <ProfileIcon />
          <span>{car.ownerId}</span>
        </div>

        <div className="flex items-center gap-2">
          <CarIcon />
          <span>{carType.name}</span>
        </div>

        <div className="flex items-center gap-2">
          <img
            src={licenseplate}
            alt="License Plate"
            className="inline-block h-[20px] w-[18px] object-contain"
          />
          <span>{car.licensePlate}</span>
        </div>

        <div className="flex items-center gap-2">
          <HorseIcon />
          <span>{car.horsepower}</span>
        </div>

        <div className="flex items-center gap-2">
          <FuelIcon />
          <span>{car.fuelType}</span>
        </div>

        {car.state && (
          <div className="flex items-center gap-2 font-lora text-white">
            <img
              src={Attention}
              alt="Attention"
              className="inline-block h-[20px] w-[18px] object-contain"
            />
            <span>{car.state}</span>
          </div>
        )}
      </div>
    </div>
  )
}
