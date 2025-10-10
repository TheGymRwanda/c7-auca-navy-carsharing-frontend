import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import { fetchWithAuth } from '../utils/api'
import AllCarsCard from '../components/AllCarsCard'

interface Car {
  id: string
  name: string
  ownerId: string
  model: string
  licensePlate: string
  horsepower: string
  fuelType: string
  state: string
  carTypeId: string
}

export default function ShowAllCars() {
  const navigate = useNavigate()
  const [carsList, setCarsList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function getAllCars() {
      try {
        const carsData = await fetchWithAuth(`/cars`)

        const fullCarsData = await Promise.all(
          carsData.map(async (car: Car) => {
            const typeData = await fetchWithAuth(`/car-types/${car.carTypeId}`)
            const ownerData = await fetchWithAuth(`/users/${car.ownerId}`)
            return { ...car, typeData, ownerData }
          }),
        )

        setCarsList(fullCarsData)
      } catch (error) {
        console.error('Failed to fetch cars:', error)
      } finally {
        setLoading(false)
      }
    }
    getAllCars()
  }, [])

  if (loading) return <p className="mt-10 text-center text-white">Loading car details...</p>

  return (
    <main className="mx-auto flex min-h-screen flex-col gap-8 py-20 text-center font-lora text-gray-100">
      <div className="flex w-full items-center gap-2 px-6">
        <button onClick={() => navigate(-1)}>
          <ChevronBackIcon />
        </button>
        <h1 className="mx-auto font-lora text-2xl">ALL CARS</h1>
      </div>

      <div className="flex flex-col gap-[16px] p-[16px]">
        {carsList.map(car => (
          <AllCarsCard
            key={car.id}
            id={car.id}
            imageUrl={car.typeData.imageUrl}
            name={car.name}
            owner={car.ownerData.name}
            type={car.typeData.name}
          />
        ))}
      </div>
    </main>
  )
}
