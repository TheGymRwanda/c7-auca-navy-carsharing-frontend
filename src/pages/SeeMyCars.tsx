import { useEffect, useState, useContext } from 'react'
import { useCars, useCarTypes } from '@/hooks'
import { useNavigate } from 'react-router-dom'
import PageContainer from '@/components/container/PageContainer'
import { AuthContext } from '@/context/AuthenticationContext'
import PageHeading from '@/components/ui/PageHeading'
import { apiUrl } from '@/util/apiUrl'
import WarnUserDialog from '@/components/ui/WarnUserDialog'
import { getAuthToken } from '@/util/auth'
import AllCarsCard from '@/components/ui/AllCarsCard'
import InformUserDialog from '@/components/ui/InformUserDialog'
import { deleteWarning } from '@/util/seeMyCars'
import useAuth from '@/hooks/useAuth'
import { useDeleteCar } from '@/hooks/useDeleteCar'
import { CarDto } from '@/util/api'
import Button from '@/components/ui/Button'
import { AppRoutes } from '@/types/AppRoutesType'

export default function SeeMyCars() {
  const [cars, setCars] = useState<CarDto[]>([])
  const [showDeleteWarning, setShowDeleteCarWarning] = useState(false)
  const [showInfoDialog, setShowInfoDialog] = useState(false)
  const [selectedDeleteCarId, setSelectedDeleteCarId] = useState<number | undefined>(undefined)
  const { logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const [{ error: authError, loading: loadAuth, data: userData }] = useAuth()
  const [{ data: carData, loading: loadingCarData }, refetchCars] = useCars()
  const [{ data: carType, loading: loadingCarsTypes }] = useCarTypes()
  const { errorDeletingCar, executeDeleteCars } = useDeleteCar()

  useEffect(() => {
    if (authError) logout?.()
  }, [loadAuth])
  function handleDeleteWarning(event?: MouseEvent) {
    deleteWarning(event, setShowDeleteCarWarning, carData, setSelectedDeleteCarId)
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
      const formatted = carData.filter(car => {
        if (userData?.id === car.ownerId) {
          return {
            id: car.id,
            name: car.name,
            ownerId: car.ownerId,
            carTypeName: car?.name,
            licensePlate: car.licensePlate,
            horsepower: car.horsepower,
            fuelType: car.fuelType,
            state: car.state,
            type: car.fuelType,
            imageAltText: car.name,
          }
        }
      })
      setCars(formatted)
    }
  }, [carData, carType])

  function handleSeeDetails(car: CarDto) {
    navigate(`${car.id}`, {
      state: { car, imageUrl: carType && carType.find(t => t.id === car.carTypeId)?.imageUrl },
    })
  }

  return (
    <PageContainer>
      <PageHeading name="See My Cars" />
      {loadingCarData ? (
        <h1>Loading Cars....</h1>
      ) : cars.length ? (
        <div className="space-y-6">
          {cars.map(car => (
            <AllCarsCard
              key={car.id}
              {...car}
              imageUrl={carType && carType.find(t => t.id === car.carTypeId)?.imageUrl}
              onClickImage={() => handleSeeDetails(car)}
              onclick={handleDeleteWarning}
              onSeeDetails={() => handleSeeDetails(car)}
              btnTitle="Delete"
            />
          ))}
        </div>
      ) : (
        <p>No car found. Reload the page to try again</p>
      )}
      <Button title="Add new Car" variant="filled" to={AppRoutes.addNewCars} />
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
          message="The car was not deleted, please try again."
        />
      )}
    </PageContainer>
  )
}
