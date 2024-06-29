'use client'
import { LucideIcon, Minus, Plus, UserIcon } from 'lucide-react'
import { ReactNode } from 'react'

import { useMap } from 'react-map-gl'

const MapControls = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col overflow-hidden border border-white divide-y divide-white rounded shadow-lg bg-white/50 backdrop-blur backdrop-filter">
    {children}
  </div>
)

const ControlButton = ({
  onClick,
  children,
}: {
  onClick: () => void
  children: ReactNode
}) => (
  <button
    className="rounded-none hover:bg-white"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
)

const ZoomIn = () => {
  const { current: map } = useMap()

  return (
    <ControlButton onClick={() => map?.zoomIn()}>
      <Plus className="w-8 h-8 p-1.5 " />
    </ControlButton>
  )
}

const ZoomOut = () => {
  const { current: map } = useMap()
  return (
    <ControlButton onClick={() => map?.zoomOut()}>
      <Minus className="w-8 h-8 p-1.5 " />
    </ControlButton>
  )
}

export const CenterOfMap = ({
  onClick,
  Icon = UserIcon,
}: {
  onClick: (latLng: { lng: number; lat: number }) => void
  Icon?: LucideIcon
}) => {
  const { current: map } = useMap()
  return (
    <ControlButton
      onClick={() => {
        const { lat, lng } = map?.getCenter() as { lng: number; lat: number }
        onClick({ lat, lng })
      }}
    >
      <Icon className="w-8 h-8 p-1.5 text-black" />
    </ControlButton>
  )
}

MapControls.ZoomIn = ZoomIn
MapControls.ZoomOut = ZoomOut

export default MapControls

export const DefaultZoomControls = ({ children }: { children?: ReactNode }) => (
  <MapControls>
    <ZoomIn />
    <ZoomOut />
    {children}
  </MapControls>
)
