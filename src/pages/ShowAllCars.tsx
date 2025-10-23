import { useContext } from 'react'

import { useNavigate } from 'react-router-dom'
import useAllCars from '@/hooks/useAllCars'
import { ChevronBackIcon } from '@/assets/ChevronBackIcon'
import AllCarsCard from '@/components/AllCarsCard'
import { AuthContext } from '@/context/LoggedInAuthContext'

export default function ShowAllCars() {
  const navigate = useNavigate()
  const { logout } = useContext(AuthContext)
  const { carsList, loading, error } = useAllCars()

  if (loading) return <p className="mt-10 text-center">Loading car details...</p>
  if (error) logout?.()

  return (
    <main className="mx-auto flex min-h-screen flex-col gap-8 py-20 text-center font-lora text-gray-100">
      <div className="flex w-full items-center gap-2 px-6">
        <button onClick={() => navigate(-1)}>
          <ChevronBackIcon />
        </button>
        <h1 className="mx-auto font-lora text-2xl">ALL CARS</h1>
      </div>

      <div className="flex flex-col gap-4 p-4">
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
