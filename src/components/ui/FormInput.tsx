import { Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import { FormInputType } from '@/types/AddNewCarTypes'

export default function FormInput({
  labelName,
  inputType,
  inputName,
  inputPlaceHolder,
}: FormInputType) {
  return (
    <div className="w-full px-4 text-left">
      <Field>
        <Label className="text-sm/6 font-medium text-white">{labelName}</Label>
        <Input
          className={clsx(
            'mt-3 block w-full rounded-lg border-none bg-input px-3 py-1.5 text-sm/6 text-white placeholder:text-white',
            'focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25',
          )}
          type={inputType}
          name={inputName}
          placeholder={inputPlaceHolder}
          required
        />
      </Field>
    </div>
  )
}
