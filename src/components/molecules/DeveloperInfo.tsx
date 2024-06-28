export interface IDeveloperInfoProps {
  className?: string
}

export const DeveloperInfo = ({ className }: IDeveloperInfoProps) => {
  return (
    <div className="flex items-center gap-1 text-xs ">
      by Soma & Karthick Ragavendran
    </div>
  )
}
