'use client'
import { trpcClient } from '@/trpc/clients/client'
import { useMemo } from 'react'
import { useMap } from 'react-map-gl'
import { Marker } from './Map/MapMarker'
import { Panel } from './Map/Panel'
import { PageTitle, TextDescription } from '../atoms/Typography'

export const DisplayCandidates = () => {
  const { current: map } = useMap()

  const bounds = useMemo(() => map?.getBounds(), [map])

  const locationFilter = useMemo(
    () => ({
      ne_lat: bounds?.getNorthEast().lat || 0,
      ne_lng: bounds?.getNorthEast().lng || 0,
      sw_lat: bounds?.getSouthWest().lat || 0,
      sw_lng: bounds?.getSouthWest().lng || 0,
    }),
    [bounds],
  )

  console.log('locationFilter ', locationFilter)
  const { data } =
    trpcClient.employers.searchCandidates.useQuery(locationFilter)

  console.log('data', data)

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
      {data?.map((candidate) => (
        <Marker
          key={candidate.id}
          latitude={candidate.address.lat}
          longitude={candidate.address.lng}
        />
      ))}
    </>
  )
}
