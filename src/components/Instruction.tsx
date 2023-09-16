import DrivingEvent from "../types/drivingEvent"
import cn from 'classnames'

type InstructionProps = {
  event: DrivingEvent
  className?: string
}

const Instruction: React.FC<InstructionProps> = ({ event, className }: InstructionProps) => {
  return (<div className={cn(className, "p-4 w-full text-center flex bg-slate-200 font-bold")}>
    <div className="m-auto">
      <p className="w-full">{event}</p>
    </div>
  </div>)
}

export default Instruction