import React from 'react'
import { FaAngleDown } from 'react-icons/fa6'

function NewCarForm() {
  const [carName, setCarName] = React.useState('')
  const [typeName, setTypeName] = React.useState('')
  const [licensePlate, setLicensePlate] = React.useState('')
  const [horsePower, setHorsePower] = React.useState('')
  const [fuelType, setFuelType] = React.useState('')
  const [additionalInfo, setAdditionalInfo] = React.useState('')

  return (
    <div className="space-y-6">
      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto text-left">
        <label className="block text-white mb-2 ml-1 font-sans">Name</label>
        <div className="flex items-center rounded-full bg-[#64A1C0] px-6 py-5">
          <input
            type="text"
            placeholder="e.g My Nice Moni Car"
            value={carName}
            onChange={e => setCarName(e.target.value)}
            className="flex-1 bg-transparent text-black outline-none placeholder:text-white/80 placeholder:text-left font-sans"
          />
        </div>
      </div>

      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto text-left">
        <label className="block text-white mb-2 ml-1 font-sans">Type</label>
        <div className="flex items-center rounded-full bg-[#64A1C0] px-6 py-5">
          <input
            type="text"
            placeholder="Moni Cooper"
            value={typeName}
            onChange={e => setTypeName(e.target.value)}
            className="flex-1 bg-transparent text-black outline-none placeholder:text-white/80 placeholder:text-left font-sans"
          />
          <FaAngleDown className="text-white ml-2" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 w-5/6 md:w-2/3 lg:w-1/2 mx-auto">
        <div className="flex-1 min-w-[250px] text-left">
          <label className="block text-white mb-2 ml-1 font-sans">License Plate</label>
          <div className="flex items-center rounded-full bg-[#64A1C0] px-5 py-4">
            <input
              type="text"
              placeholder="e.g M-XY 123"
              value={licensePlate}
              onChange={e => setLicensePlate(e.target.value)}
              className="w-full bg-transparent text-black outline-none placeholder:text-white/80 placeholder:text-left font-sans"
            />
          </div>
        </div>

        <div className="flex-1 min-w-[250px] text-left">
          <label className="block text-white mb-2 ml-1 font-sans">Horse Power</label>
          <div className="flex items-center rounded-full bg-[#64A1C0] px-5 py-4">
            <input
              type="number"
              placeholder="e.g 150"
              value={horsePower}
              onChange={e => setHorsePower(e.target.value)}
              className="w-full bg-transparent text-black outline-none placeholder:text-white/80 placeholder:text-left font-sans"
            />
          </div>
        </div>
      </div>

      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto text-left">
        <label className="block text-white mb-2 ml-1 font-sans">Fuel Type</label>
        <div className="flex items-center rounded-full bg-[#64A1C0] px-6 py-5">
          <input
            type="text"
            placeholder="e.g 150"
            value={fuelType}
            onChange={e => setFuelType(e.target.value)}
            className="flex-1 bg-transparent text-black outline-none placeholder:text-white/80 placeholder:text-left font-sans"
          />
          <FaAngleDown className="text-white ml-2" />
        </div>
      </div>

      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto text-left">
        <label className="block text-white mb-2 ml-1 font-sans">Additional Info</label>

        <div className="flex items-center rounded-full bg-[#64A1C0] px-6 py-5">
          <input
            type="text"
            placeholder="e.g No Smoking"
            value={additionalInfo}
            onChange={e => setAdditionalInfo(e.target.value)}
            className="flex-1 bg-transparent text-black outline-none placeholder:text-white/80 text-left font-sans"
          />
        </div>
      </div>
    </div>
  )
}

export default NewCarForm
