import { Space_Grotesk as SpaceGrotesk } from 'next/font/google';
import { Color } from '../styles/Color';

export const MAIN_FONT = SpaceGrotesk({
  subsets: ['latin'],
  variable: '--font-main',
  preload: true,
  fallback: ['sans-serif'],
});
export const APP_NAME = 'Rivalz Ai';
export const APP_DESCRIPTION =
  'Rivalz is creating the World Abstraction Layer for AI and AI Agents.';
export const APP_URL = 'rivalz.ai';
export const BRAND_COLOR = Color.primary['500'];
export const BACKGROUND_COLOR = Color.primary['500'];
export const BACKGROUND_IMAGE = 'url(/backgrounds/rivalz-bg.png)';

export const RIVALZ_CHAIN = 'rivalz';
export const RIVALZ_LOGO = '/rivalz-logo.png';
