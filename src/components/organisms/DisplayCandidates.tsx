'use client'
import { trpcClient } from '@/trpc/clients/client'
import { useMemo } from 'react'
import { Marker } from './Map/MapMarker'
import { Panel } from './Map/Panel'
import { useGetBounds } from '@/util/hooks/map'
import { Loader } from '../molecules/Loader'
import { LocateIcon, MapPinIcon } from 'lucide-react'
import {
  IconMapPin,
  IconMapPin2,
  IconMapPinFilled,
  IconPinned,
} from '@tabler/icons-react'
export const DisplayCandidates = () => {
  const bounds = useGetBounds()

  const locationFilter = useMemo(
    () => ({
      ne_lat: bounds?.getNorthEast().lat || 0,
      ne_lng: bounds?.getNorthEast().lng || 0,
      sw_lat: bounds?.getSouthWest().lat || 0,
      sw_lng: bounds?.getSouthWest().lng || 0,
    }),
    [bounds],
  )

  const { data, isLoading } =
    trpcClient.employers.searchCandidates.useQuery(locationFilter)

  if (data?.length === 0) {
    return (
      <Panel variants={{ position: 'center-center' }}>
        <div className="p-3 bg-white/50 rounded-sm shadow-lg">
          <div className="text-left">No candidates found here.</div>
        </div>
      </Panel>
    )
  }

  return (
    <>
      {isLoading ? (
        <Panel variants={{ position: 'center-center' }}>
          <Loader />
        </Panel>
      ) : null}
      {data?.map((candidate) => (
        <Marker
          key={candidate.id}
          latitude={candidate.address.lat}
          longitude={candidate.address.lng}
          anchor="bottom"
        >
          <IconMapPinFilled />
        </Marker>
      ))}
    </>
  )
}
