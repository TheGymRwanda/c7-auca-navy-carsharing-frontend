import { ChevronBackIcon } from '@/assets/ChevronBackIcon'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'

export default function PageHeading({ name, back = false }: { name: string; back?: boolean }) {
  const navigate = useNavigate()

  return (
    <div className="w-full md:w-1/2 md:mx-auto py-8 flex items-center">
      {back && (
        <button onClick={() => navigate(-1)} className="w-[7%] ml-8 md:-ml-8">
          <ChevronBackIcon />
        </button>
      )}
      <p className={clsx('text-5xl w-[93%] md:ml-0', back && '-ml-[9%]')}>{name}</p>
    </div>
  )
}
