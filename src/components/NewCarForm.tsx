import React from 'react'
import CarInputs from './CarInputs'
import { FaAngleDown } from 'react-icons/fa6'
import Button from './ui/Button'

interface FormErrors {
  carName?: string
  typeName?: string
  licensePlate?: string
  horsePower?: string
  fuelType?: string
  additionalInfo?: string
}

const CAR_TYPES = ['Sedan', 'SUV', 'Hatchback', 'Sports Car']

const FUEL_TYPES = ['Petrol', 'Diesel', 'Electric']

function NewCarForm() {
  const [carName, setCarName] = React.useState<string>('')
  const [typeName, setTypeName] = React.useState<string>('')
  const [licensePlate, setLicensePlate] = React.useState<string>('')
  const [horsePower, setHorsePower] = React.useState<string>('')
  const [fuelType, setFuelType] = React.useState<string>('')
  const [additionalInfo, setAdditionalInfo] = React.useState<string>('')
  const [errors, setErrors] = React.useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)
  const [showTypeDropdown, setShowTypeDropdown] = React.useState<boolean>(false)
  const [showFuelDropdown, setShowFuelDropdown] = React.useState<boolean>(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!carName.trim()) {
      newErrors.carName = 'Car name is required'
    } else if (carName.trim().length < 2) {
      newErrors.carName = 'Car name must be at least 2 characters long'
    }

    if (!typeName.trim()) {
      newErrors.typeName = 'Car type is required'
    } else if (!CAR_TYPES.includes(typeName)) {
      newErrors.typeName = 'Please select a valid car type'
    }

    if (!licensePlate.trim()) {
      newErrors.licensePlate = 'License plate is required'
    } else if (!/^[A-Z0-9-\s]{3,12}$/.test(licensePlate)) {
      newErrors.licensePlate =
        'License plate must contain only capital letters, numbers, and hyphens'
    }

    if (!horsePower.trim()) {
      newErrors.horsePower = 'Horse power is required'
    } else if (!/^\d+$/.test(horsePower)) {
      newErrors.horsePower = 'Horse power must be a positive number'
    } else if (parseInt(horsePower) <= 0) {
      newErrors.horsePower = 'Horse power must be greater than 0'
    } else if (parseInt(horsePower) > 2000) {
      newErrors.horsePower = 'Horse power cannot exceed 2000'
    }

    if (!fuelType.trim()) {
      newErrors.fuelType = 'Fuel type is required'
    } else if (!FUEL_TYPES.includes(fuelType)) {
      newErrors.fuelType = 'Please select a valid fuel type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (validateForm()) {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))

        console.log('Form submitted successfully:', {
          carName,
          typeName,
          licensePlate: licensePlate.toUpperCase(),
          horsePower: parseInt(horsePower),
          fuelType,
          additionalInfo,
        })

        setCarName('')
        setTypeName('')
        setLicensePlate('')
        setHorsePower('')
        setFuelType('')
        setAdditionalInfo('')
        setErrors({})
        setShowTypeDropdown(false)
        setShowFuelDropdown(false)

        alert('Car added successfully!')
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Error submitting form. Please try again.')
      }
    }

    setIsSubmitting(false)
  }

  const handleCancel = () => {
    setCarName('')
    setTypeName('')
    setLicensePlate('')
    setHorsePower('')
    setFuelType('')
    setAdditionalInfo('')
    setErrors({})
    setShowTypeDropdown(false)
    setShowFuelDropdown(false)
  }

  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>, field: keyof FormErrors) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(e.target.value)

      if (errors[field]) {
        setErrors(prev => ({ ...prev, [field]: undefined }))
      }
    }

  const handleLicensePlateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toUpperCase()
    setLicensePlate(value)
    if (errors.licensePlate) {
      setErrors(prev => ({ ...prev, licensePlate: undefined }))
    }
  }

  const handleHorsePowerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '') // Only allow numbers
    setHorsePower(value)
    if (errors.horsePower) {
      setErrors(prev => ({ ...prev, horsePower: undefined }))
    }
  }

  const selectCarType = (type: string) => {
    setTypeName(type)
    setShowTypeDropdown(false)
    if (errors.typeName) {
      setErrors(prev => ({ ...prev, typeName: undefined }))
    }
  }

  const selectFuelType = (fuel: string) => {
    setFuelType(fuel)
    setShowFuelDropdown(false)
    if (errors.fuelType) {
      setErrors(prev => ({ ...prev, fuelType: undefined }))
    }
  }

  React.useEffect(() => {
    const handleClickOutside = () => {
      setShowTypeDropdown(false)
      setShowFuelDropdown(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CarInputs
        label="Name"
        value={carName}
        onChange={handleInputChange(setCarName, 'carName')}
        placeholder="e.g My Nice Moni Car"
        className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto"
        required
      />
      {errors.carName && (
        <p className="text-red-400 text-sm mt-1 text-center w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
          {errors.carName}
        </p>
      )}

      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto text-left relative">
        <label className="block text-white mb-2 ml-1 font-sans">
          Type <span className="text-red-400">*</span>
        </label>
        <div
          className="flex items-center rounded-full bg-[#64A1C0] px-6 py-5 cursor-pointer relative"
          onClick={e => {
            e.stopPropagation()
            setShowTypeDropdown(!showTypeDropdown)
            setShowFuelDropdown(false)
          }}
        >
          <input
            type="text"
            placeholder="Select car type"
            value={typeName}
            readOnly
            className="flex-1 bg-transparent text-white outline-none placeholder:text-white/80 placeholder:text-left font-sans cursor-pointer" // Changed to text-white
          />
          <FaAngleDown
            className={`text-white ml-2 transition-transform ${
              showTypeDropdown ? 'rotate-180' : ''
            }`}
          />
        </div>

        {showTypeDropdown && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg z-10 max-h-60 overflow-y-auto">
            {CAR_TYPES.map(type => (
              <div
                key={type}
                className="px-6 py-4 hover:bg-gray-100 cursor-pointer first:rounded-t-2xl last:rounded-b-2xl font-sans text-black"
                onClick={() => selectCarType(type)}
              >
                {type}
              </div>
            ))}
          </div>
        )}
        {errors.typeName && <p className="text-red-400 text-sm mt-1 ml-1">{errors.typeName}</p>}
      </div>

      <div className="flex flex-wrap gap-4 w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
        <div className="flex-1 min-w-[250px]">
          <CarInputs
            label="License Plate"
            value={licensePlate}
            onChange={handleLicensePlateChange}
            placeholder="e.g M-XY 123"
            className="w-full"
            required
          />
          {errors.licensePlate && (
            <p className="text-red-400 text-sm mt-1 ml-1">{errors.licensePlate}</p>
          )}
        </div>

        <div className="flex-1 min-w-[250px]">
          <CarInputs
            label="Horse Power"
            type="text"
            value={horsePower}
            onChange={handleHorsePowerChange}
            placeholder="e.g 150"
            className="w-full"
            required
          />
          {errors.horsePower && (
            <p className="text-red-400 text-sm mt-1 ml-1">{errors.horsePower}</p>
          )}
        </div>
      </div>

      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto text-left relative">
        <label className="block text-white mb-2 ml-1 font-sans">
          Fuel Type <span className="text-red-400">*</span>
        </label>
        <div
          className="flex items-center rounded-full bg-[#64A1C0] px-6 py-5 cursor-pointer relative"
          onClick={e => {
            e.stopPropagation()
            setShowFuelDropdown(!showFuelDropdown)
            setShowTypeDropdown(false)
          }}
        >
          <input
            type="text"
            placeholder="Select fuel type"
            value={fuelType}
            readOnly
            className="flex-1 bg-transparent text-white outline-none placeholder:text-white/80 placeholder:text-left font-sans cursor-pointer" // Changed to text-white
          />
          <FaAngleDown
            className={`text-white ml-2 transition-transform ${
              showFuelDropdown ? 'rotate-180' : ''
            }`}
          />
        </div>

        {showFuelDropdown && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg z-10">
            {FUEL_TYPES.map(fuel => (
              <div
                key={fuel}
                className="px-6 py-4 hover:bg-gray-100 cursor-pointer first:rounded-t-2xl last:rounded-b-2xl font-sans text-black"
                onClick={() => selectFuelType(fuel)}
              >
                {fuel}
              </div>
            ))}
          </div>
        )}
        {errors.fuelType && <p className="text-red-400 text-sm mt-1 ml-1">{errors.fuelType}</p>}
      </div>

      <CarInputs
        label="Additional Info"
        value={additionalInfo}
        onChange={handleInputChange(setAdditionalInfo, 'additionalInfo')}
        placeholder="e.g No Smoking"
        className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto"
      />

      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto pt-8 mt-4 flex gap-1">
        <Button
          title="Cancel"
          variant="outlined"
          onClick={handleCancel}
          disabled={isSubmitting}
          className="flex-1 py-3 text-sm"
        />
        <Button
          title={isSubmitting ? 'Adding...' : 'Add Car'}
          variant="filled"
          disabled={isSubmitting}
          className="flex-1 py-3 text-sm"
        />
      </div>
    </form>
  )
}

export default NewCarForm
