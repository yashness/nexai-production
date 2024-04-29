import { useRef } from "react";
import { AbsoluteFill, Audio, Easing, Img, staticFile, useVideoConfig } from "remotion";
import { springTiming, TransitionSeries } from "@remotion/transitions";
import { Rect } from "@remotion/shapes";
import { slide } from "@remotion/transitions/slide";
import { loadFont } from "@remotion/google-fonts/Lato";
import NewsHeading from "src/components/NewsHeading/NewsHeading";
import NewsSummary from "src/components/NewsSummary/NewsSummary";
import NewsImage from "src/components/NewsImage/NewsImage";
const { fontFamily } = loadFont(); // "Titan One"

export const MyComp = ({ news }) => {
  const video = useRef<HTMLVideoElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const { width, height } = useVideoConfig();

  return (
    <AbsoluteFill>
          <AbsoluteFill className="bg-red-300 pattern-hive-red-700/50 pattern-hive-scale-[0.5]">
                <Rect width={width} height={height} opacity={0.7} />
          </AbsoluteFill>
          <AbsoluteFill>
            <Audio loop src={staticFile("news-background-audio.mp3")} />
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
                      <NewsImage image={item.image} />
                    </div>
                    <div>
                      <NewsSummary summary={item.summary} />
                    </div>
                  </div>
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50">
                  <div className="flex m-8 justify-between text-3xl text-white">
                    <p>{item.published}</p>
                    <p>{item.author}</p>
                  </div>
                  </div>
                </div>
              </AbsoluteFill>

                <div className="absolute bottom-0 right-0 w-64 opacity-30">
                  <Img
                    src={item.rss_image}
                    />
                </div>
å            </TransitionSeries.Sequence>
            {/** if idx is not last then add something */}
            {idx !== news.length - 1 && (
              <TransitionSeries.Transition
                presentation={slide(
                  { direction: 'from-bottom'},
                )}
                timing={springTiming({
                  config: {
                    damping: 200,
                  },
                  durationInFrames: 30,
                  durationRestThreshold: 0.001,
                })}
              />
            )}
          </>
        ))}
        </TransitionSeries>
    </AbsoluteFill>
  );
};
