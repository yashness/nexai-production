import { useCallback, useEffect, useRef } from "react";
import { AbsoluteFill, Img, useVideoConfig, Video } from "remotion";
import type { FindNewsQuery, FindNewsQueryVariables } from 'types/graphql'
import { TransitionSeries } from "@remotion/transitions";
import { linearTiming } from "@remotion/transitions";
import { Rect } from "@remotion/shapes";
import { slide } from "@remotion/transitions/slide";
import { loadFont } from "@remotion/google-fonts/Lato";
import NewsHeading from "src/components/NewsHeading/NewsHeading";
import NewsSummary from "src/components/NewsSummary/NewsSummary";
import NewsImage from "src/components/NewsImage/NewsImage";
const { fontFamily } = loadFont(); // "Titan One"

export const MyComp: React.FC<FindNewsQueryVariables> = ({ news }) => {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
          <AbsoluteFill className="bg-red-300 pattern-hive-red-700/50 pattern-hive-scale-[0.5]">
                <Rect width={width} height={height} opacity={0.7} />
          </AbsoluteFill>
        <TransitionSeries>
        {news.map((item, idx) => (
          <>
            <TransitionSeries.Sequence durationInFrames={120}>
              <AbsoluteFill>
              <div className="grid gap-8">
                <div>
                    <NewsHeading title={item.title} />
                </div>
                <div className="grid grid-cols-2 gap-16 mx-16">
                  <div>
                    <NewsImage image={item.imageURL} />
                  </div>
                  <div>
                    <NewsSummary summary={item.summary} />
                  </div>
                </div>
                <div className="absolute bottom-0 w-full bg-black bg-opacity-50">
                <div className="flex m-8 justify-between text-3xl text-white">
                  <p>{item.published}</p>
                  <p>{item.authorName}</p>
                </div>
                </div>
              </div>
              </AbsoluteFill>
            </TransitionSeries.Sequence>
            {/** if idx is not last then add something */}
            {idx !== news.length - 1 && (
              <TransitionSeries.Transition
                presentation={slide()}
                timing={linearTiming({ durationInFrames: 30})}
              />
            )}
          </>
        ))}
        </TransitionSeries>
    </AbsoluteFill>
  );
};
