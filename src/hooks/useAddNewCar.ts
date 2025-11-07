import { FormEvent, useEffect, useState } from 'react'
import useAxios from 'axios-hooks'
import { apiUrl } from '@/util/apiUrl'
import { getAuthToken } from '@/util/auth'

export default function useAddNewCar() {
  const [loadingAddNewCar, setLoadingAddNewCar] = useState(false)
  const [errorAddingNewCar, setErrorAddingNewCar] = useState(false)
  const [addedNewCarSuccessfully, setAddedNewCarSuccessfully] = useState(false)
  const [{ data, loading, error }, addNewCar] = useAxios(
    {
      url: `${apiUrl}/cars`,
      method: 'POST',
      headers: { Authorization: `Bearer ${getAuthToken()}` },
    },
    { manual: true },
  )

  useEffect(() => {
    if (loading) {
      setLoadingAddNewCar(true)
    }
    if (error) {
      setLoadingAddNewCar(false)
      setErrorAddingNewCar(true)
      console.info(error)
    }
    if (data) {
      setLoadingAddNewCar(false)
      setAddedNewCarSuccessfully(true)
      console.info(data)
    }
  }, [data, error, loading])

  async function handleAddNewCar(event: FormEvent) {
    event.preventDefault()
    setLoadingAddNewCar(true)
    const formElement = event.target as HTMLFormElement
    const formData = new FormData(formElement)
    const carName = formData.get('carName')
    const carType = formData.get('carType')
    const carLicensePlate = formData.get('carLicensePlate')
    const carHosePower = Number(formData.get('carHosePower'))
    const carFuelType = String(formData.get('carFuelType')).toLowerCase()
    const carAdditionalInformation = formData.get('carAdditionalInformation')
    const newCarInfo = {
      carTypeId: getCarTypeId(carType),
      name: carName,
      fuelType: carFuelType,
      horsepower: carHosePower,
      licensePlate: carLicensePlate,
      info: carAdditionalInformation,
    }
    console.info(newCarInfo)
    await addNewCar({
      data: newCarInfo,
    })
  }

  return { handleAddNewCar, loadingAddNewCar, errorAddingNewCar, addedNewCarSuccessfully }
}

function getCarTypeId(name: FormDataEntryValue | null) {
  switch (name) {
    case 'Car 550':
      return 1
    case 'Car Prime':
      return 2
    default:
      return 3
  }
}
