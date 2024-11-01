import { AbsoluteFill } from 'remotion';
import { z } from 'zod';
import Slash from '../../components/Slash';
import { colorVar } from '../../lib/helpers';
import { Color } from '../../types';
import { defineBackground } from '../define';

export const SlashesBackground = defineBackground({
  type: 'slashes',
  description: 'Background with slashes that flying in',
  schema: z.object({
    background: Color,
    stroke: Color,
  }),
  component: ({ style, background, stroke }) => {
    return (
      <AbsoluteFill style={{ overflow: 'hidden', background: colorVar(background), ...style }}>
        <div style={{ position: 'absolute', left: -300, bottom: 'calc(100% - 400px)' }}>
          <Slash direction="TR" width={350} height={60} startFrame={10} distance={180} />
        </div>
        <div style={{ position: 'absolute', left: -200, bottom: '35%' }}>
          <Slash direction="TR" width={300} height={100} startFrame={0} distance={100} />
        </div>
        <div style={{ position: 'absolute', left: -450, bottom: -300 }}>
          <Slash
            direction="TR"
            width={600}
            height={150}
            fill={true}
            startFrame={15}
            distance={300}
          />
        </div>
        <div style={{ position: 'absolute', left: '45%', bottom: -230 }}>
          <Slash direction="TR" width={300} height={50} startFrame={30} />
        </div>

        <div style={{ position: 'absolute', right: 'calc(100% - 950px)', top: -300 }}>
          <Slash direction="BL" width={150} height={50} distance={400} startFrame={10} />
        </div>
        <div style={{ position: 'absolute', right: 0, top: -350 }}>
          <Slash
            direction="BL"
            width={400}
            height={80}
            fill={true}
            distance={300}
            startFrame={20}
          />
        </div>
        <div style={{ position: 'absolute', right: -200, top: -200 }}>
          <Slash direction="BL" width={150} height={50} distance={300} startFrame={25} />
        </div>
        <div style={{ position: 'absolute', right: -400, top: -100 }}>
          <Slash direction="BL" width={150} height={50} distance={300} startFrame={35} />
        </div>
        <div style={{ position: 'absolute', right: -400, top: 450 }}>
          <Slash direction="BL" width={600} height={150} distance={200} startFrame={0} />
        </div>
      </AbsoluteFill>
    );
  },
});
