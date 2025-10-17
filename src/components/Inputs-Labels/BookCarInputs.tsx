interface BookCarInputsProps {
  startDate?: string
  endDate?: string
  startPlaceholder?: string
  endPlaceholder?: string
  onStartDateChange?: (value: string) => void
  onEndDateChange?: (value: string) => void
}

function BookCarInputs({
  startDate = '',
  endDate = '',
  startPlaceholder = 'Select start date & time',
  endPlaceholder = 'Select end date & time',
  onStartDateChange,
  onEndDateChange,
}: BookCarInputsProps) {
  return (
    <div className="mx-auto flex w-5/6 flex-col gap-6 md:w-2/3 lg:w-1/2">
      <div className="flex flex-col gap-2">
        <label className="text-lg text-white">Start Date</label>
        <input
          type="datetime-local"
          value={startDate}
          onChange={e => onStartDateChange && onStartDateChange(e.target.value)}
          placeholder={startPlaceholder}
          className="w-full cursor-pointer rounded-full bg-[#64A1C0] px-5 py-4 text-white outline-none placeholder:text-white/70 focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg text-white">End Date</label>
        <input
          type="datetime-local"
          value={endDate}
          onChange={e => onEndDateChange && onEndDateChange(e.target.value)}
          placeholder={endPlaceholder}
          className="w-full cursor-pointer rounded-full bg-[#64A1C0] px-5 py-4 text-white outline-none placeholder:text-white/70 focus:ring-2 focus:ring-blue-300"
        />
      </div>
    </div>
  )
}

export default BookCarInputs
