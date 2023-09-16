import React from 'react'

type SpeechBubbleProps = {
  text: string
}

const SpeechBubble: React.FC<SpeechBubbleProps> = ({
  text
}: SpeechBubbleProps) => {
  return (
    <div className="relative bg-green-500 text-white py-2 px-4 rounded-r-lg rounded-bl-lg">
      <div className="absolute top-2 left-[-10px] w-0 h-0 border-5 border-transparent border-r-solid border-blue-500"></div>
      <p>{text}</p>
    </div>
  )
}

export default SpeechBubble