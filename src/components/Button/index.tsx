import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';
import { BaseButtonProps, ButtonWithIconProps } from './types';

export type ButtonProps = (BaseButtonProps | ButtonWithIconProps) &
  ButtonHTMLAttributes<HTMLButtonElement>;

const DEFAULT_CLICK_HANDLER = () => null;

const Button = (props: ButtonProps) => {
  const {
    title,
    onClick,
    variant = 'primary',
    size = 'default',
    isLoading = false,
    type = 'button',
    icon: Icon,
    ...attrs
  } = props;

  const onClickHandler = isLoading ? DEFAULT_CLICK_HANDLER : onClick;
  const iconSize = size === 'default' ? 20 : 24;

  return (
    <S.Container
      type={type}
      variant={variant}
      size={size}
      onClick={onClickHandler}
      {...attrs}
    >
      {Icon ? (
        <>
          {typeof Icon === 'function' ? <Icon size={iconSize} /> : Icon}
          {title && <span>{title}</span>}
        </>
      ) : (
        title
      )}
    </S.Container>
  );
};

Button.defaultProps = {
  isLoading: false,
  variant: 'primary',
  size: 'default',
};

export default Button;
