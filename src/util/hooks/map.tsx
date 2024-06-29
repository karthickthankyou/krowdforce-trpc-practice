import { useEffect, useState } from 'react'
import { useMap } from 'react-map-gl'

export const useGetBounds = () => {
  const { current: map } = useMap()
  const [bounds, setBounds] = useState<mapboxgl.LngLatBounds | null>(null)

  useEffect(() => {
    if (!map) return

    const updateBounds = () => {
      setBounds(map.getBounds())
    }

    // Set initial bounds
    updateBounds()

    // Add event listeners
    map.on('moveend', updateBounds)
    map.on('zoomend', updateBounds)

    // Cleanup event listeners on unmount
    return () => {
      map.off('moveend', updateBounds)
      map.off('zoomend', updateBounds)
    }
  }, [map])

  return bounds
}
