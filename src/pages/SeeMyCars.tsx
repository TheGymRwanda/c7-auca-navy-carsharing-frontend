import { ReactNode, SyntheticEvent, useContext, useEffect, useState } from 'react'

import useAxios from 'axios-hooks'

import { useCars, useCarTypes, useUser } from '@/hooks'
import { AuthContext } from '@/context/AuthenticationContext'

import AuthenticatedContainer from '@/components/container/AuthenticatedContainer'
import PageHeading from '@/components/ui/PageHeading'
import { apiUrl } from '@/util/apiUrl'
import WarnUserDialog from '@/components/ui/WarnUserDialog'
import { getAuthToken } from '@/util/auth'
import AllCarsCard from '@/components/ui/AllCarsCard'
import InformUserDialog from '@/components/ui/InformUserDialog'

export default function SeeMyCars() {
  const [cars, setCars] = useState<ReactNode>()
  const [showDeleteWarning, setShowDeleteCarWarning] = useState(false)
  const [showInfoDialog, setShowInfoDialog] = useState(false)
  const [selectedDeleteCarId, setSelectedDeleteCarId] = useState<number | undefined>(undefined)
  const { logout, userId } = useContext(AuthContext)
  const [{ error }] = useUser(userId)
  const [{ data: carData, loading: loadingCarData }, refetchCars] = useCars()
  const [{ data: carType, loading: loadingCarsTypes }] = useCarTypes()
  const [{ error: errorDeletingCar }, executeDeleteCars] = useAxios(
    {
      method: 'DELETE',
    },
    { manual: true },
  )

  function handleDeleteWarning(evnt?: SyntheticEvent) {
    setShowDeleteCarWarning(true)
    const carId = carData?.filter(
      car =>
        car.name ===
        evnt?.currentTarget.previousElementSibling?.firstElementChild?.nextSibling?.firstChild
          ?.textContent,
    )[0]?.id
    setSelectedDeleteCarId(carId)
  }

  async function deleteCar() {
    setShowDeleteCarWarning(false)
    await executeDeleteCars({
      headers: { Authorization: `Bearer ${getAuthToken()}` },
      url: `${apiUrl}/cars/${selectedDeleteCarId}`,
    })
    refetchCars()
    console.info('car was deleted')
  }

  useEffect(() => {
    if (errorDeletingCar) {
      setShowInfoDialog(true)
      console.info(errorDeletingCar?.response?.data?.message)
    }
  }, [errorDeletingCar])

  if (error?.status === 400) logout?.()
  useEffect(() => {
    if (!loadingCarsTypes && !loadingCarData) {
      const carsInfo = carData?.map(car => {
        const carImgUrl =
          carType !== undefined
            ? carType.filter(type => type.id === car.carTypeId)[0]?.imageUrl
            : ''
        return (
          <div key={car.id}>
            <AllCarsCard
              name={car.name}
              id={car.id}
              imageUrl={carImgUrl !== '' ? carImgUrl : ''}
              imageAltText={carImgUrl === '' ? 'No image found' : 'Car image'}
              showDeleteBtn={true}
              type={car.fuelType}
              owner={car.name}
              onclick={handleDeleteWarning}
            />
          </div>
        )
      })
      if (carsInfo?.length) {
        setCars(carsInfo)
      }
    }
  }, [carData, carType])
  return (
    <AuthenticatedContainer>
      <PageHeading name="See my car" />
      {loadingCarData ? <h1>Loading Cars....</h1> : cars}
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
    </AuthenticatedContainer>
  )
}
