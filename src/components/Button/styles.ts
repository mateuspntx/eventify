import styled, { css, DefaultTheme } from 'styled-components';

import { BaseButtonProps } from './types';

type ButtonContainerProps = Pick<BaseButtonProps, 'variant' | 'size'>;

const modifiers = ({ colors }: DefaultTheme) => ({
  variants: {
    primary: css`
      background: ${colors.primary[100]};
    `,
    secondary: css`
      background: ${colors.secondary[100]};
    `,
    outline: css`
      background: none;
      color: ${colors.foreground[100]};
      border: 2px solid ${colors.background[60]};

      :disabled {
        background: none;
        border-color: ${colors.background[40]};
      }
    `,
  },
  sizes: {
    default: css`
      padding: 1rem;
      font-size: 1rem;
      border-radius: 0.5rem;
    `,
    large: css`
      padding: 1.25rem;
      font-size: 1.125rem;
      border-radius: 0.75rem;
    `,
  },
});

export const Container = styled.button<ButtonContainerProps>`
  ${({ theme, variant, size }) => css`
    color: ${theme.colors.base.text};

    > svg + span {
      margin-left: 0.75rem;
    }

    :disabled {
      background: ${theme.colors.background[40]};
    }

    ${modifiers(theme).variants[variant]};
    ${modifiers(theme).sizes[size]};
  `}
`;
