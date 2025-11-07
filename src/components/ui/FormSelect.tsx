import { Field, Label, Select } from '@headlessui/react'
import clsx from 'clsx'
import { ChevronDownIcon } from '@/assets/ChevronDownIcon'
import { FormSelectType } from '@/types/AddNewCarTypes'

export default function FormSelect({
  labelName,
  selectName,
  selectOptionOne,
  selectOptionTwo,
  selectOptionThree,
}: FormSelectType) {
  return (
    <div className="w-full px-4 text-left">
      <Field>
        <Label className="text-sm/6 font-medium text-white">{labelName}</Label>
        <div className="relative">
          <Select
            className={clsx(
              'mt-3 block w-full appearance-none rounded-lg border-none bg-input px-3 py-1.5 text-sm/6 text-white',
              'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
              // Make the text of each option black on Windows
              '*:text-black',
            )}
            name={selectName}
          >
            <option value={selectOptionOne}>{selectOptionOne}</option>
            <option value={selectOptionTwo}>{selectOptionTwo}</option>
            <option value={selectOptionThree}>{selectOptionThree}</option>
          </Select>
          <ChevronDownIcon
            className="size-4 group pointer-events-none absolute right-2.5 top-2.5 fill-white/60"
            aria-hidden="true"
          />
        </div>
      </Field>
    </div>
  )
}
