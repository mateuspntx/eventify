export type BaseButtonProps = {
  title: string;
  variant: 'primary' | 'secondary' | 'outline';
  size: 'default' | 'large';
  isLoading: boolean;
  icon?:
    | import('react').ElementType<import('react-icons').IconBaseProps>
    | JSX.Element;
};

export type ButtonWithIconProps = Omit<BaseButtonProps, 'title' | 'icon'> & {
  title?: never;
  icon:
    | import('react').ElementType<import('react-icons').IconBaseProps>
    | JSX.Element;
};
