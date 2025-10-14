export interface Car {
  id: string
  name: string
  ownerId: string
  model: string
  licensePlate: string
  horsepower: string
  fuelType: string
  state?: string
  carTypeId?: string | null
}

export interface CarType {
  id: string
  imageUrl?: string
  name: string
}

export interface User {
  id: string
  name: string
}

export interface CarWithDetails extends Car {
  typeData?: CarType | null
  ownerData?: User | null
}
