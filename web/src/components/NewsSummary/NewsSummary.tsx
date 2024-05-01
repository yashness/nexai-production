import { loadFont } from '@remotion/google-fonts/Lato'
const { fontFamily } = loadFont()

import { useCurrentFrame, interpolate } from 'remotion'

interface NewsSummaryProps {
  summary: string
  durationInFrames: number
}

const NewsSummary: React.FC<NewsSummaryProps> = ({
  summary,
  durationInFrames,
}) => {
  const frame = useCurrentFrame()
  // Interpolate the current frame to get a value between 0 and 1
  const progress = interpolate(frame, [0, durationInFrames * 0.6], [0, 1], {
    extrapolateRight: 'clamp',
  })

  // Calculate how many characters to show based on the current frame
  const charsToShow = Math.floor(progress * summary.length)

  // Create the typewriter effect by only showing a substring of the summary
  const displayedSummary = summary.substring(0, charsToShow)

  return (
    <div>
      <h1
        className="bg-white p-4 text-4xl text-gray-900 opacity-80"
        style={{ fontFamily }}
      >
        {displayedSummary}
      </h1>
    </div>
  )
}

export default NewsSummary
