import { EmployeeMenu } from '@/components/organisms/EmployeeMenu'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col md:flex-row md:h-[calc(100vh-4rem)]">
      <div className="flex flex-col gap-2 p-2 min-w-48">
        <EmployeeMenu />
      </div>
      <div className="flex-grow  ">{children}</div>
    </div>
  )
}
