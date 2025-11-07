import { useNavigate } from 'react-router-dom'
import CarInputs from './CarInputs'
import ErrorMessage from './ErrorMessage'
import HorsePowerLicensePlate from './HorsePowerLicensePlate'
import { FaAngleDown } from 'react-icons/fa6'
import Button from '../ui/Button'
import { useCarForm } from './UseCarForm'
import SeeMyCars from '@/pages/SeeMyCars'

function NewCarForm() {
  const navigate = useNavigate()
  const {
    form, errors, isSubmitting, dropdowns,
    updateField, validate, toggleDropdown, selectOption,
    setIsSubmitting, CAR_TYPES, FUEL_TYPES
  } = useCarForm()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (validate()) {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        console.log('Form submitted:', { ...form, licensePlate: form.licensePlate.toUpperCase() })
        alert('Car added successfully!')
        navigate('/SeeMyCars')
      } catch (error) {
        console.error('Error:', error)
        alert('Error submitting form. Please try again.')
      }
    }
    setIsSubmitting(false)
  }

  const Dropdown = ({ type, options, field }: { 
    type: 'type' | 'fuel', options: string[], field: 'typeName' | 'fuelType' 
  }) => (
    <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto text-left relative">
      <label className="block text-white mb-2 ml-1 font-sans">
        {type === 'type' ? 'Type' : 'Fuel Type'} <span className="text-red-400">*</span>
      </label>
      <div
        className="flex items-center rounded-full bg-[#64A1C0] px-6 py-5 cursor-pointer"
        onClick={e => { e.stopPropagation(); toggleDropdown(type) }}
      >
        <input
          type="text"
          placeholder={`Select ${type}`}
          value={form[field]}
          readOnly
          className="flex-1 bg-transparent text-white outline-none placeholder:text-white/80 font-sans cursor-pointer"
        />
        <FaAngleDown className={`text-white ml-2 transition-transform ${dropdowns[type] ? 'rotate-180' : ''}`} />
      </div>

      {dropdowns[type] && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-lg z-10">
          {options.map(option => (
            <div
              key={option}
              className="px-6 py-4 hover:bg-gray-100 cursor-pointer first:rounded-t-2xl last:rounded-b-2xl font-sans text-black"
              onClick={() => selectOption(field, option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      <ErrorMessage message={errors[field]} className="ml-1" />
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CarInputs
        label="Name"
        value={form.carName}
        onChange={(e) => updateField('carName', e.target.value)}
        placeholder="e.g My Nice Moni Car"
        className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto"
        required
      />
      <ErrorMessage message={errors.carName} className="text-center w-5/6 md:w-2/3 lg:w-1/2 mx-auto" />

      <Dropdown type="type" options={CAR_TYPES} field="typeName" />

      <HorsePowerLicensePlate
        licensePlate={form.licensePlate}
        horsePower={form.horsePower}
        errors={errors}
        onLicensePlateChange={(e) => updateField('licensePlate', e.target.value.toUpperCase())}
        onHorsePowerChange={(e) => updateField('horsePower', e.target.value.replace(/[^0-9]/g, ''))}
      />

      <Dropdown type="fuel" options={FUEL_TYPES} field="fuelType" />

      <CarInputs
        label="Additional Info"
        value={form.additionalInfo}
        onChange={(e) => updateField('additionalInfo', e.target.value)}
        placeholder="e.g No Smoking"
        className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto"
      />

      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto pt-8 mt-4 flex gap-1">
        <Button
          title="Cancel"
          variant="outlined"
          onClick={() => navigate('/SeeMyCars')}
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