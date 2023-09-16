'use client'

import Instruction from '@/src/components/Instruction'
import Mapbox from '@/src/components/Mapbox'
import Navigation from '@/src/components/Navigation'
import Recommendation from '@/src/components/Recommendation'
import useDrivingInstructions from '@/src/hooks/useDrivingInstructions'

const ZOOM_LEVEL = 13

export default function Home() {
  const { instruction, latitude, longitude, error } = useDrivingInstructions()

  if (error) {
    console.log(error);
  }

  return (
    <main className="h-screen w-full flex flex-col items-stretch justify-between">
      {latitude && longitude ? (
        <>
          <Mapbox latitude={latitude} longitude={longitude} zoom={ZOOM_LEVEL} />
          <Recommendation className='grow'text="Get out! Otherwise you end up like strawberries... in a jam!" />
          <Instruction event={instruction} />
          <Navigation className='' />
        </>
      ) : (
        <p>Loading...</p>
      )
      }
    </main>
  )
}
