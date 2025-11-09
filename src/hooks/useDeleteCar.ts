import useAxios from 'axios-hooks'

export function useDeleteCar() {
  const [{ error: errorDeletingCar }, executeDeleteCars] = useAxios(
    { method: 'DELETE' },
    { manual: true },
  )
  return { errorDeletingCar, executeDeleteCars }
}
