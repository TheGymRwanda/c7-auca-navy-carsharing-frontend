import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'
import { AuthContext } from '@/context/AuthenticationContext'

import useAllCars from '@/hooks/useAllCars'
import { ChevronBackIcon } from '@/assets/ChevronBackIcon'
import AllCarsCard from '@/components/ui/AllCarsCard'
import PageContainer from '@/components/container/PageContainer'

export default function ShowAllCars() {
  const navigate = useNavigate()
  const { carsList, loading } = useAllCars()
  const [{ error: authError, loading: loadAuth }] = useAuth()
  const { logout } = useContext(AuthContext)

  useEffect(() => {
    if (authError) {
      logout?.()
    }
  }, [loadAuth])

  return (
    <PageContainer>
      {loading ? (
        <h1 className="mt-4 text-center">Loading Cars</h1>
      ) : (
        <>
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
        </>
      )}
    </PageContainer>
  )
}
