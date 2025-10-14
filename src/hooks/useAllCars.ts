import { useEffect, useState } from 'react'
import axios from 'axios'
import useCars from './useCars'
import { CarWithDetails } from '../util/types'
import { apiUrl } from '../util/apiUrl'
import { getAuthToken } from '../util/auth'

export default function useFullCars() {
  const [{ data: carsData, loading, error }] = useCars()
  const [carsList, setCarsList] = useState<CarWithDetails[]>([])
  const [loadingDetails, setLoadingDetails] = useState(false)

  useEffect(() => {
    if (!carsData || !carsData.length) return

    async function fetchDetails() {
      setLoadingDetails(true)
      const token = getAuthToken()

      try {
        const fullCarsData = await Promise.all(
          carsData.map(async car => {
            try {
              const [typeRes, ownerRes] = await Promise.all([
                axios.get<CarType>(`${apiUrl}/car-types/${car.carTypeId}`, {
                  headers: { Authorization: `Bearer ${token}` },
                }),
                axios.get<User>(`${apiUrl}/users/${car.ownerId}`, {
                  headers: { Authorization: `Bearer ${token}` },
                }),
              ])

              return {
                ...car,
                typeData: typeRes.data,
                ownerData: ownerRes.data,
              }
            } catch {
              return { ...car, typeData: null, ownerData: null }
            }
          }),
        )

        setCarsList(fullCarsData)
      } catch (err) {
        console.error('Failed to fetch car details:', err)
      } finally {
        setLoadingDetails(false)
      }
    }

    fetchDetails()
  }, [carsData])

  return {
    carsList: carsList,
    loading: loading || loadingDetails,
    error,
  }
}
