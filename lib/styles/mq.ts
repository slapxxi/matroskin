import type { CSSInterpolation } from '@emotion/serialize';

export const smQuery = '(min-width: 320px)';
export const mdQuery = '(min-width: 768px)';
export const lgQuery = '(min-width: 1024px)';
export const xlQuery = '(min-width: 1290px)';
export const reducedMotionQuery = '(prefers-reduced-motion)';

const smMediaQuery = `@media ${smQuery}`;
const mdMediaQuery = `@media ${mdQuery}`;
const lgMediaQuery = `@media ${lgQuery}`;
const xlMediaQuery = `@media ${xlQuery}`;

export let sm = (...styles: Array<CSSInterpolation>) => ({
  [smMediaQuery]: styles,
});

export let md = (...styles: Array<CSSInterpolation>) => ({
  [mdMediaQuery]: styles,
});

export let lg = (...styles: Array<CSSInterpolation>) => ({
  [lgMediaQuery]: styles,
});

export let xl = (...styles: Array<CSSInterpolation>) => ({
  [xlMediaQuery]: styles,
});
