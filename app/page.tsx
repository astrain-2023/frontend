'use client'

import CurrentLocation from '@/src/components/CurrentLocation'
import Mapbox from '@/src/components/Mapbox'
import useCurrentLocation from '@/src/hooks/useCurrentLocation'
import useFakeLocation from '@/src/hooks/useFakeLocation'

const ZOOM_LEVEL=13

export default function Home() {

  const { latitude, longitude, error } = useFakeLocation()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {error && <p>{error}</p>}
      {latitude && longitude ? (
        <>
          <Mapbox latitude={latitude} longitude={longitude} zoom={ZOOM_LEVEL} />
          <CurrentLocation latitude={latitude} longitude={longitude} />
        </>
      ) : (
        <p>Loading...</p>
      )
      }
    </main>
  )
}
