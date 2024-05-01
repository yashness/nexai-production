import { Player } from "@remotion/player";
import { MyComp } from "../../remotion/Composition";
import { useEffect, useState } from "react";
import React from 'react';
import { NewsItem } from "src/remotion/types";
import { PER_SUMMARY_CHAR_SECONDS } from "src/remotion/Constants";

interface VideoProps {
  data: NewsItem[];
}

const Video: React.FC<VideoProps> = ({data}) => {
  const news = data;
  const [duration, setDuration] = useState<number>(30);
  useEffect(() => {
    const durationInFrames = news.reduce((total, item) => total + item.summary.length * 30 * PER_SUMMARY_CHAR_SECONDS, 0)
    setDuration(Math.round(durationInFrames))
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
