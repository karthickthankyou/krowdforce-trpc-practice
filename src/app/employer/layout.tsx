import { EmployerMenu } from '@/components/organisms/EmployerMenu'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col md:flex-row gap-2 md:h-[calc(100vh-4rem)]">
      <div className="flex flex-col gap-2 p-2 min-w-48  bg-white">
        <EmployerMenu />
      </div>
      <div className="flex-grow">{children}</div>
    </div>
  )
}
