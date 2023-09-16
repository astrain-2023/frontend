import Instruction from "../components/Instruction"
import DrivingEvents from "./drivingEvent"

type DrivingInstruction = {
  longitude: number
  latitude: number
  recommendation?: string
  instruction?: DrivingEvents
}
export default DrivingInstruction