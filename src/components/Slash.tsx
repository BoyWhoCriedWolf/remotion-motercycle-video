import { Easing, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';
import { colorVar } from '../lib/helpers';
import { Color } from '../types';

const Slash = ({
  color = 'primary',
  width = 200,
  height = 60,
  strokeWidth = 4,
  fill = false,
  distance: propsDistance = 100,
  grow: propsGrow = 100,
  direction = 'BL',
  startFrame = 0,
}: {
  color?: Color;
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: boolean;
  distance?: number;
  grow?: number;
  direction?: 'BL' | 'BR' | 'TL' | 'TR';
  startFrame?: number;
}) => {
  const absFrame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();

  const frame = Math.max(0, absFrame - startFrame);

  const moveFrame = Math.floor(fps * 1);
  const growFrame = Math.floor(fps * 0.7);

  const distance = interpolate(frame, [0, moveFrame], [0, propsDistance], {
    easing: Easing.bezier(0, 1, 1, 1),
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const grow =
    frame < growFrame ? 0 : interpolate(frame - growFrame, [0, durationInFrames], [0, propsGrow]);

  return (
    <div
      style={{
        transform: `translate(${direction === 'BL' || direction === 'TL' ? '-' : ''}${distance + grow}px, ${direction === 'TL' || direction === 'TR' ? '-' : ''}${distance + grow}px)`,
      }}
    >
      <div
        style={{
          width: width,
          height: height,

          transform: `rotate(${direction === 'TR' ? 315 : direction === 'TL' ? 225 : direction === 'BL' ? 135 : 45}deg)`,

          border: `solid ${colorVar(color)} ${strokeWidth}px`,
          borderRadius: height / 2,
          background: fill ? colorVar(color) : 'transparent',
        }}
      ></div>
    </div>
  );
};

export default Slash;
