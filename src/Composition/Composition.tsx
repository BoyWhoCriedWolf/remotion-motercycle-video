import { TransitionSeries, linearTiming } from '@remotion/transitions';
import { AbsoluteFill, Audio, staticFile, useVideoConfig } from 'remotion';
import { z } from 'zod';

import Scene2, { scene2Schema } from './Scene2';
import Scene3, { scene3Schema } from './Scene3';
import Scene4, { scene4Schema } from './Scene4';
import Scene5, { scene5Schema } from './Scene5';
import Scene6, { scene6Schema } from './Scene6';
import Scene1 from './scene-1';
import { scene1Schema } from './scene-1/Scene1';

import { BackgroundProps } from '../backgrounds';
import { LoadFonts } from '../lib/LoadFonts';
import { HEIGHT, WIDTH } from '../lib/consts';
import { getCSSVariables } from '../lib/helpers';
import { customCenterPresentation } from '../transitions/CenterPresentation';
import { customL2RPresentation } from '../transitions/Left2RightPresentation';
import { WideSlidePresentation } from '../transitions/WideSlidePresentation';
import { Colors, Fonts } from '../types';

export const MainSchema = z.object({
  audioVolume: z.number(),
  music: z.string(),
  colors: Colors,
  fonts: Fonts,
  background: BackgroundProps,
  transitionDuration: z.number(),
  scene1Duration: z.number(),
  scene1Props: scene1Schema,
  scene2Duration: z.number(),
  scene2Props: scene2Schema,
  scene3Duration: z.number(),
  scene3Props: scene3Schema,
  scene4Duration: z.number(),
  scene4Props: scene4Schema,
  scene5Duration: z.number(),
  scene5Props: scene5Schema,
  scene6Duration: z.number(),
  scene6Props: scene6Schema,
});

type MainProps = z.infer<typeof MainSchema>;

const Main: React.FC<MainProps> = ({
  audioVolume,
  transitionDuration,
  colors,
  background,
  fonts,
  scene1Duration,
  scene1Props,
  scene2Duration,
  scene2Props,
  scene3Duration,
  scene3Props,
  scene4Duration,
  scene4Props,
  scene5Duration,
  scene5Props,
  scene6Duration,
  scene6Props,
}) => {
  const { id } = useVideoConfig();

  // You work will be mainly with the Scenes files

  // Work in this File:
  // adapt the transitions to an existing one or to your new one

  // If you want to use a different component than a <TransitionSeries>
  // then you'll have to talk to me why it's necessary.

  return (
    <LoadFonts fonts={fonts}>
      <AbsoluteFill
        id={id}
        style={{
          background: 'black',
          ...getCSSVariables({ colors: colors, fonts: fonts, roundness: 1 }),
        }}
      >
        {/* change the name of your music file in the public folder to match music.mp3  */}
        <Audio src={staticFile('music.mp3')} volume={audioVolume} />
        <TransitionSeries>
          <TransitionSeries.Sequence durationInFrames={scene1Duration}>
            <Scene1 {...scene1Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={WideSlidePresentation({ direction: 'from-right' })}
            timing={linearTiming({ durationInFrames: transitionDuration })}
          />
          <TransitionSeries.Sequence durationInFrames={scene2Duration}>
            <Scene2 {...scene2Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={customCenterPresentation({ height: HEIGHT, width: WIDTH })}
            timing={linearTiming({ durationInFrames: transitionDuration })}
          />
          <TransitionSeries.Sequence durationInFrames={scene3Duration}>
            <Scene3 {...scene3Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={WideSlidePresentation({ direction: 'from-bottom' })}
            timing={linearTiming({ durationInFrames: transitionDuration })}
          />
          <TransitionSeries.Sequence durationInFrames={scene4Duration}>
            <Scene4 {...scene4Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={customL2RPresentation({ height: HEIGHT, width: WIDTH })}
            timing={linearTiming({ durationInFrames: transitionDuration })}
          />
          <TransitionSeries.Sequence durationInFrames={scene5Duration}>
            <Scene5 {...scene5Props} background={background} />
          </TransitionSeries.Sequence>
          <TransitionSeries.Transition
            presentation={WideSlidePresentation({ direction: 'from-bottom' })}
            timing={linearTiming({ durationInFrames: transitionDuration })}
          />
          <TransitionSeries.Sequence durationInFrames={scene6Duration}>
            <Scene6 {...scene6Props} background={background} />
          </TransitionSeries.Sequence>
        </TransitionSeries>
      </AbsoluteFill>
    </LoadFonts>
  );
};

export default Main;
