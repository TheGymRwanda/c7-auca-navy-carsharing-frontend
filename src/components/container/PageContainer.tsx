import { Children } from '@/types/GeneralTypes'

export default function PageContainer({ children }: Children) {
  return (
    <div className="flex min-h-screen flex-col gap-8 py-20 text-center font-lora text-gray-100">
      {children}
    </div>
  )
}
