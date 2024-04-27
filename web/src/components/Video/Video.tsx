import { Player } from "@remotion/player";
import { MyComp } from "../../remotion/Composition";
import { useEffect, useState } from "react";
const Video = ({news}) => {
  const [duration, setDuration] = useState(30)
  useEffect(() => {
    // calculate duration in frames
    const PER_NEWS_SECONDS = 3
    const durationInFrames = news.length * 30 * PER_NEWS_SECONDS
    setDuration(durationInFrames)
  }, [news])
  if(!duration) return null
  return (
    <Player
      component={MyComp}
      inputProps={{ news: news }}
      durationInFrames={duration}
      compositionWidth={1920}
      compositionHeight={1080}
      fps={30}
      style={{
        width: 1280,
        height: 720,
      }}
      controls
    />
  );
}

export default Video
