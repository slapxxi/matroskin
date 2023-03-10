import { ClassNameProps } from 'lib/types';
import { SVGProps } from 'react';

export type DividerProps = {
  width?: number | string;
  height?: number | string;
  r?: number;
  color?: string;
} & ClassNameProps &
  SVGProps<SVGSVGElement>;

export let Divider = (props: DividerProps) => {
  let { width = '100%', height = 2, r = 0, color, ...rest } = props;
  return (
    <svg width={width} height={height} {...rest}>
      <rect
        width="100%"
        height="100%"
        fill={color ? `var(--${color},currentColor)` : 'currentColor'}
        rx={r}
      />
    </svg>
  );
};
