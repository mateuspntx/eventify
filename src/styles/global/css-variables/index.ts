import { css } from 'styled-components';

export const THEME_CSS_VARIABLES = css`
  body,
  body[data-theme='light'] {
    --colors-primary-100: #3a37db;
    --colors-primary-80: #615ee3;
    --colors-primary-60: #8986e9;
    --colors-primary-40: #b0aff1;

    --colors-secondary-100: #0090ff;
    --colors-secondary-80: #33a6ff;
    --colors-secondary-60: #65bcff;
    --colors-secondary-40: #9ad3ff;

    --colors-foreground-100: #05162b;
    --colors-foreground-80: #394455;
    --colors-foreground-60: #6a7380;
    --colors-foreground-40: #9ba1aa;

    --colors-background-100: #ffffff;
    --colors-background-80: #f1f4f9;
    --colors-background-60: #99b3c6;
    --colors-background-40: #809fb8;

    --colors-error-100: #ea3a3d;
    --colors-error-80: #ef6165;
    --colors-error-60: #f5a0a2;
    --colors-error-40: #f7b0b1;

    --colors-success-100: #1ad598;
    --colors-success-80: #47ddad;
    --colors-success-60: #76e6c1;
    --colors-success-40: #a4eed6;

    --colors-warning-100: #fab959;
    --colors-warning-80: #fac77a;
    --colors-warning-60: #fbd59b;
    --colors-warning-40: #fde3bd;

    --colors-text-base: #ffffff;

    --colors-gradient-primary-0: var(--colors-primary-100);
    --colors-gradient-primary-100: #7c4ef1;

    --colors-gradient-secondary-0: var(--colors-secondary-100);
    --colors-gradient-secondary-100: #36dae8;
  }

  body[data-theme='dark'] {
    --colors-primary-100: #3a37db;
    --colors-primary-80: #615ee3;
    --colors-primary-60: #8986e9;
    --colors-primary-40: #b0aff1;

    --colors-secondary-100: #0090ff;
    --colors-secondary-80: #33a6ff;
    --colors-secondary-60: #65bcff;
    --colors-secondary-40: #9ad3ff;

    --colors-foreground-100: #ffffff;
    --colors-foreground-80: #f1f4f9;
    --colors-foreground-60: #99b3c6;
    --colors-foreground-40: #809fb8;

    --colors-background-100: #05162b;
    --colors-background-80: #394455;
    --colors-background-60: #6a7380;
    --colors-background-40: #9ba1aa;

    --colors-error-100: #ea3a3d;
    --colors-error-80: #ef6165;
    --colors-error-60: #f5a0a2;
    --colors-error-40: #f7b0b1;

    --colors-success-100: #1ad598;
    --colors-success-80: #47ddad;
    --colors-success-60: #76e6c1;
    --colors-success-40: #a4eed6;

    --colors-warning-100: #fab959;
    --colors-warning-80: #fac77a;
    --colors-warning-60: #fbd59b;
    --colors-warning-40: #fde3bd;

    --colors-text-base: #ffffff;

    --colors-primary-gradient-0: var(--colors-primary-100);
    --colors-primary-gradient-100: #7c4ef1;

    --colors-secondary-gradient-0: var(--colors-secondary-100);
    --colors-secondary-gradient-100: #36dae8;
  }
`;
