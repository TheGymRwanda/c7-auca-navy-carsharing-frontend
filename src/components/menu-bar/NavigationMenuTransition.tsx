import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { BaseComponentsProp } from '@/types/base'

export default function NavigationMenuTransition({ children }: BaseComponentsProp) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-300"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-100"
      leaveFrom="transform opacity-100 scale-200"
      leaveTo="transform opacity-0 scale-95"
    >
      {children}
    </Transition>
  )
}
