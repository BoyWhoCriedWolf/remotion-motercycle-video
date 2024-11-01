import { z } from 'zod';
import { CrossesBackground } from './_/Crosses';
import { ImageBackground } from './_/Image';
import { LinesBackground } from './_/Lines';
import { RealEstateBackground } from './_/RealEstate';
import { SlashesBackground } from './_/Slashes';
import { SquaresBackground } from './_/Squares';
import { StaticBackground } from './_/Static';

export const BACKGROUNDS = [
  // Add new background here
  SlashesBackground,
  LinesBackground,
  SquaresBackground,
  ImageBackground,
  StaticBackground,
  RealEstateBackground,
  CrossesBackground,
];

type BackgroundSchema = (typeof BACKGROUNDS)[number]['schema'];
export const BackgroundProps = z.discriminatedUnion(
  'type',
  BACKGROUNDS.map((bg) => bg.schema) as [BackgroundSchema, ...BackgroundSchema[]]
);
export type BackgroundProps = z.infer<typeof BackgroundProps>;
