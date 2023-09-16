import { useState, useEffect } from "react"
import drivingInstructions from "../util/drivingInstructions"

const POLLING_INTERVAL = 100

const useDrivingInstructions = () => {
  const [index, setIndex] = useState<number>(0)

  useEffect(() => {
    const updateLocation = () => {
      setIndex((previousIndex) => (previousIndex + 1) % drivingInstructions.length)
    }

    const intervalId = setInterval(updateLocation, POLLING_INTERVAL)

    updateLocation()

    return () => clearInterval(intervalId)
  }, [])

  console.log(index)
  console.table(drivingInstructions[index])

  return drivingInstructions[index]
}

export default useDrivingInstructions