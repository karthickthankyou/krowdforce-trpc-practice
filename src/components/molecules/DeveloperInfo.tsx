export interface IDeveloperInfoProps {
  className?: string
}

export const DeveloperInfo = ({ className }: IDeveloperInfoProps) => {
  return (
    <div className="flex items-center gap-1 text-xs text-gray-600">
      By Soma & Karthick Ragavendran
    </div>
  )
}
