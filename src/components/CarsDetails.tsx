import React from 'react'
import CarIcon from '../assets/CarIcon'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'
import FuelIcon from '../assets/FuelIcon'
import ProfileIcon from '../assets/ProfileIcon'

interface CarDetailsProps {
  image: string
  name: string
  owner: string
  model: string
  plate: string
  horsepower: string
  fuel: string
  restrictions?: string
}

const CarsDetails: React.FC<CarDetailsProps> = ({
  image,
  name,
  owner,
  model,
  plate,
  horsepower,
  fuel,
  restrictions,
}) => (
  <div className="flex min-h-screen flex-col items-center bg-gradient-to-b to-sky-700 text-white">
    <div className="flex w-full items-center justify-between bg-black/70 p-4">
      <button className="text-sm">Menu</button>

      <div className="rounded-full bg-white p-2">
        <CarIcon />
      </div>

      <div className="rounded-full bg-white p-2">
        <ProfileIcon />
      </div>
    </div>

    <div className="mt-6 flex w-full items-center gap-2 px-6">
      <button>
        <ChevronBackIcon />
      </button>
      <h1 className="mx-auto text-2xl font-bold">DETAILS</h1>
    </div>

    <CarIcon />
    <div className="mt-6">
      <img src={image} alt={name} className="h-auto w-72 rounded-lg shadow-lg" />
    </div>

    <div className="mt-6 w-full space-y-3 px-10 text-left">
      <h2 className="text-lg font-semibold">{name}</h2>

      <div className="flex items-center gap-2">
        <ProfileIcon />
        <span>{owner}</span>
      </div>

      <div className="flex items-center gap-2">
        <CarIcon />
        <span>{model}</span>
      </div>

      <div className="flex items-center gap-2">
        <span>{plate}</span>
      </div>

      <div className="flex items-center gap-2">
        <span>{horsepower}</span>
      </div>

      <div className="flex items-center gap-2">
        <FuelIcon />
        <span>{fuel}</span>
      </div>

      {restrictions && (
        <div className="flex items-center gap-2 font-semibold text-red-300">
          <span>{restrictions}</span>
        </div>
      )}
    </div>
  </div>
)

export default CarsDetails
