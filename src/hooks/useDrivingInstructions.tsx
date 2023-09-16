import { useState, useEffect } from "react"
import useFakeLocation from "./useFakeLocation"
import RANDOM_EVENTS from "../util/randomEvents"

const POLLING_INTERVAL = 10000

const useDrivingInstructions = () => {
  const { latitude, longitude, error } = useFakeLocation()
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const updateLocation = () => {
      setIndex((previousIndex) => (previousIndex + 1) % RANDOM_EVENTS.length)
    }

    const intervalId = setInterval(updateLocation, POLLING_INTERVAL)

    updateLocation()

    return () => clearInterval(intervalId)
  }, [])

  const instruction = RANDOM_EVENTS[index]

  return { instruction, latitude, longitude, error }
}

export default useDrivingInstructions