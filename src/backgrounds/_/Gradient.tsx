import { AbsoluteFill } from 'remotion';
import { z } from 'zod';

import RadialGradient from '../../components/magicui/RadialGradient';
import { colorVar } from '../../lib/helpers';
import { Color } from '../../types';
import { defineBackground } from '../define';

export const GradientBackground = defineBackground({
  type: 'gradient',
  description: 'Gradient color',
  schema: z.object({ background: Color }),
  component: ({ style, background }) => {
    return (
      <AbsoluteFill
        style={{
          overflow: 'hidden',
          background,
          ...style,
        }}
      >
        <RadialGradient from={colorVar('background')} to={colorVar('backgroundDark')} size={1920} />
      </AbsoluteFill>
    );
  },
});
