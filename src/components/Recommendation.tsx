import React from 'react'
import SpeechBubble from "./SpeechBubble"
import Image from 'next/image'
import Heidi from "../assets/heidi.png"
import cn from 'classnames'


type RecommendationProps = {
  text: string
  className?: string
}

const Recommendation: React.FC<RecommendationProps> = ({
  text,
  className
}: RecommendationProps) => {
  return (
    <div className={cn(className, "flex items-center space-x-3 mt-4 w-full mx-auto px-4 py-2")}>
      <Image src={Heidi} alt={"Heidi"} className="w-20 h-20 rounded-full object-cover" />
      <SpeechBubble text={text} />
    </div>
  )
}

export default Recommendation