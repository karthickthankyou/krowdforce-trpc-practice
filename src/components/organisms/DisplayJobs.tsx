'use client'
import { trpcClient } from '@/trpc/clients/client'
import { useEffect, useMemo, useState } from 'react'
import { LngLatBounds, useMap } from 'react-map-gl'
import { Marker } from './Map/MapMarker'
import { Panel } from './Map/Panel'
import { PageTitle, TextDescription } from '../atoms/Typography'

export const DisplayJobs = () => {
  const { current: map } = useMap()

  const [bounds, setBounds] = useState<LngLatBounds>()
  useEffect(() => {
    const bounds = map?.getBounds()
    setBounds(bounds)
  }, [map])

  const locationFilter = useMemo(
    () => ({
      ne_lat: bounds?.getNorthEast().lat || 0,
      ne_lng: bounds?.getNorthEast().lng || 0,
      sw_lat: bounds?.getSouthWest().lat || 0,
      sw_lng: bounds?.getSouthWest().lng || 0,
    }),
    [bounds],
  )

  console.log('locationFilter ', locationFilter, bounds)

  const { data } = trpcClient.employees.searchJobs.useQuery(locationFilter)

  console.log('data', data)

  if (data?.length === 0) {
    return (
      <Panel variants={{ position: 'center-center' }}>
        <div className="p-3 bg-white/50 rounded-sm shadow-lg">
          <div className="text-left">
            <PageTitle>No Job Listings Found</PageTitle>
            <TextDescription className="max-w-48 mt-1">
              We couldn&apos;t find any job listings in your selected area.{' '}
            </TextDescription>
          </div>
        </div>
      </Panel>
    )
  }

  return (
    <>
      {data?.map((job) => (
        <Marker
          key={job.id}
          latitude={job.Employer.address.lat}
          longitude={job.Employer.address.lng}
        />
      ))}
    </>
  )
}
