import { UserIcon } from 'lucide-react'
import { Marker as MarkerGl, MarkerProps } from 'react-map-gl'

export const Marker = (props: MarkerProps) => {
  return <MarkerGl {...props} />
}

interface Address {
  lat: number
  lng: number
}

interface MapMarkerProps {
  address: Address
  onChange: (address: Address) => void
}

export const MapMarker = ({ address, onChange }: MapMarkerProps) => {
  return (
    <Marker
      pitchAlignment="auto"
      longitude={address.lng || 0}
      latitude={address.lat || 0}
      draggable
      onDragEnd={({ lngLat }) => {
        const { lat, lng } = lngLat
        onChange({ ...address, lat, lng })
      }}
    >
      <UserIcon />
    </Marker>
  )
}
