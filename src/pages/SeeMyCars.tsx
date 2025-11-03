import { ReactNode, useEffect, useState } from 'react'

import useAxios from 'axios-hooks'

import { useCars, useCarTypes } from '@/hooks'

import PageContainer from '@/components/container/PageContainer'
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

  const [{ data: carData, loading: loadingCarData }, refetchCars] = useCars()
  const [{ data: carType, loading: loadingCarsTypes }] = useCarTypes()
  const [{ error: errorDeletingCar }, executeDeleteCars] = useAxios(
    {
      method: 'DELETE',
    },
    { manual: true },
  )

  function handleDeleteWarning(event?: MouseEvent) {
    setShowDeleteCarWarning(true)
    const btnEvent = event?.currentTarget as HTMLButtonElement
    const carId = carData?.filter(
      car =>
        car.name ===
        btnEvent?.previousElementSibling?.firstElementChild?.nextSibling?.firstChild?.textContent,
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
    <PageContainer>
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
    </PageContainer>
  )
}
