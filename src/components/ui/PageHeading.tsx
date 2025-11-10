import { ChevronBackIcon } from '@/assets/ChevronBackIcon'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

export default function PageHeading({ name, back = false }: { name: string; back?: boolean }) {
  const navigate = useNavigate()

  return (
    <div className="flex w-full items-center py-8 md:mx-auto md:w-1/2">
      {back && (
        <button onClick={() => navigate(-1)} className="ml-8 w-[7%] md:-ml-8">
          <ChevronBackIcon />
        </button>
      )}
      <p className={clsx('w-[93%] text-5xl md:ml-0', back && 'ml-[9%]')}>{name}</p>
    </div>
  )
}
