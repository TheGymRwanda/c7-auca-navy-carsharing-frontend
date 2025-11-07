import { CarDto } from './api'

export function deleteWarning(
  event: MouseEvent | undefined,
  setShowDeleteCarWarning: (stateVal: boolean) => void,
  carData: CarDto[] | undefined,
  setSelectedDeleteCarId: (stateVal: undefined | number) => void,
) {
  setShowDeleteCarWarning(true)
  const btnEvent = event?.currentTarget as HTMLButtonElement
  const carId = carData?.find(
    car =>
      car?.name ===
      btnEvent?.previousElementSibling?.firstElementChild?.nextSibling?.firstChild?.textContent,
  )?.id
  if (carId !== undefined) setSelectedDeleteCarId(carId)
}
