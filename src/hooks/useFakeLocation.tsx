import { useState, useEffect } from "react"
import RANDOM_ROUTE from "../util/randomRoute"

const POLLING_INTERVAL = 100

const useFakeLocation = () => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const updateLocation = () => {
      setIndex((previousIndex) => (previousIndex + 1) % RANDOM_ROUTE.length)
    }

    const intervalId = setInterval(updateLocation, POLLING_INTERVAL)

    updateLocation()

    return () => clearInterval(intervalId)
  }, [])

  const location = RANDOM_ROUTE[index]
  console.table(location)

  // Same return values as useCurrentLocation
  return { latitude: location?.latitude, longitude: location?.longitude, error: null }
}

export default useFakeLocation