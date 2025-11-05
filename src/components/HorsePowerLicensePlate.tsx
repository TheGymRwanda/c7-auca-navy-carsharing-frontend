import CarInputs from './CarInputs'
import ErrorMessage from './ErrorMessage'
import  NewCarType  from '../types/NewCarType'

interface HorsePowerLicensePlateProps {
  licensePlate: string
  horsePower: string
  errors: NewCarType
  onLicensePlateChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onHorsePowerChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function HorsePowerLicensePlate({
  licensePlate,
  horsePower,
  errors,
  onLicensePlateChange,
  onHorsePowerChange
}: HorsePowerLicensePlateProps) {
  return (
    <div className="flex flex-wrap gap-4 w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
      <div className="flex-1 min-w-[250px]">
        <CarInputs
          label="License Plate"
          value={licensePlate}
          onChange={onLicensePlateChange}
          placeholder="e.g M-XY 123"
          className="w-full"
          required
        />
        <ErrorMessage message={errors.licensePlate} className="ml-1" />
      </div>

      <div className="flex-1 min-w-[250px]">
        <CarInputs
          label="Horse Power"
          type="text"
          value={horsePower}
          onChange={onHorsePowerChange}
          placeholder="e.g 150"
          className="w-full"
          required
        />
        <ErrorMessage message={errors.horsePower} className="ml-1" />
      </div>
    </div>
  )
}

