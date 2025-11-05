import { useEffect, useState } from 'react'
import useAxios from 'axios-hooks'
import { useCars, useCarTypes } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import PageContainer from '@/components/container/PageContainer'
import PageHeading from '@/components/ui/PageHeading'
import { apiUrl } from '@/util/apiUrl'
import WarnUserDialog from '@/components/ui/WarnUserDialog'
import { getAuthToken } from '@/util/auth'
import AllCarsCard from '@/components/ui/AllCarsCard'
import InformUserDialog from '@/components/ui/InformUserDialog'
import { MyCarDetails } from '@/types/CarTypes'

export default function SeeMyCars() {
  const [cars, setCars] = useState<MyCarDetails[]>([])
  const [showDeleteWarning, setShowDeleteCarWarning] = useState(false)
  const [showInfoDialog, setShowInfoDialog] = useState(false)
  const [selectedDeleteCarId, setSelectedDeleteCarId] = useState<number | undefined>(undefined)

  const [{ data: carData, loading: loadingCarData }, refetchCars] = useCars()
  const [{ data: carType, loading: loadingCarsTypes }] = useCarTypes()
  const [{ error: errorDeletingCar }, executeDeleteCars] = useAxios(
    { method: 'DELETE' },
    { manual: true },
  )

  const navigate = useNavigate()

  function handleDeleteWarning(event?: MouseEvent) {
    setShowDeleteCarWarning(true)
    const btnEvent = event?.currentTarget as HTMLButtonElement
    const carId = carData?.find(
      car =>
        car.name ===
        btnEvent?.previousElementSibling?.firstElementChild?.nextSibling?.firstChild?.textContent,
    )?.id
    setSelectedDeleteCarId(carId)
  }

  async function deleteCar() {
    setShowDeleteCarWarning(false)
    await executeDeleteCars({
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/cars/${selectedDeleteCarId}`,
    })
    refetchCars()
  }

  useEffect(() => {
    if (errorDeletingCar) setShowInfoDialog(true)
  }, [errorDeletingCar])

  useEffect(() => {
    if (!loadingCarsTypes && !loadingCarData && carData && carType) {
      const formatted = carData.map(car => {
        const typeInfo = carType.find(t => t.id === car.carTypeId)
        return {
          id: car.id,
          name: car.name,
          ownerId: car.ownerId,
          carTypeName: typeInfo?.name,
          licensePlate: car.licensePlate,
          horsepower: car.horsepower,
          fuelType: car.fuelType,
          state: car.state,
          type: car.fuelType,
          imageUrl: typeInfo?.imageUrl || '/placeholder-car.png',
          imageAltText: car.name,
        }
      })
      setCars(formatted)
    }
  }, [carData, carType])

  function handleSeeDetails(car: MyCarDetails) {
    navigate(`${car.id}`, { state: { car } })
  }

  return (
    <PageContainer>
      <PageHeading name="See My Cars" />
      {loadingCarData ? (
        <h1>Loading Cars....</h1>
      ) : (
        <div className="space-y-6">
          {cars.map(car => (
            <AllCarsCard
              key={car.id}
              {...car}
              onclick={handleDeleteWarning}
              onSeeDetails={() => handleSeeDetails(car)}
            />
          ))}
        </div>
      )}

      {showDeleteWarning && (
        <WarnUserDialog
          deleteWarning={showDeleteWarning}
          deleteCar={deleteCar}
          onclose={() => setShowDeleteCarWarning(false)}
        />
      )}
      {showInfoDialog && (
        <InformUserDialog
          showDialog={showInfoDialog}
          onclose={() => setShowInfoDialog(false)}
          message={errorDeletingCar?.response?.data?.message}
        />
      )}
    </PageContainer>
  )
}
