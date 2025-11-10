interface DetailItemProps {
  title: string | number
  icon?: React.ReactNode
  img?: string
}

export default function MyCarDetailsItem({ title, icon, img }: DetailItemProps) {
  if (!icon && !img) {
    console.warn('DetailItem: You must provide either an icon or an image.')
    return null
  }

  return (
    <div className="flex items-center gap-2">
      {icon && icon}
      {img && <img src={img} className="inline-block h-[20px] w-[18px] object-contain" />}
      <span>{title}</span>
    </div>
  )
}
