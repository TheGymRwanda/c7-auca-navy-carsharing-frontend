import { PropsWithChildren } from 'react'

export default function PageContainer({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col gap-8 py-20 text-center font-lora text-gray-100">
      {children}
    </div>
  )
}
