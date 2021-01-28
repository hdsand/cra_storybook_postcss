import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import _ from 'lodash';
import styles from './Button.module.css';

export type Props = {
  className?: string;
  href?: string;
  to?: string;
  size?: string;
  primary?: boolean;
  secondary?: boolean;
  ghost?: boolean;
  noText?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  title?: string;
  inactive?: boolean;
  testId: string;
};

const buttonComponent = ({ testId = '', ...restProps }: Props) => (
  <button data-test={testId} {...restProps} />
);
const linkComponent = ({ testId = '', ...restProps }: Props) => (
  <a data-test={testId} {...restProps} />
);
const navLinkComponent = ({ to = '', testId = '', ...restProps }: Props) => {
  return <Link to={to} data-test={testId} {...restProps} />;
};

const Button: React.FC<Props> = ({
  href,
  size,
  to,
  primary = false,
  secondary = false,
  ghost = false,
  noText = false,
  disabled = false,
  className = '',
  inactive = false,
  onClick,
  children,
  title,
  ...allProps
}) => {
  const buttonClassName = cn({
    [styles.root]: true,
    [styles.root_medium]: size === 'medium',
    [styles.root_small]: size === 'small',
    [styles.root_large]: size === 'large',
    [styles.root_primary]: primary,
    [styles.root_secondary]: secondary,
    [styles.root_link]: href,
    [styles.root_ghost]: ghost,
    [styles.root_noText]: noText,
    [styles.root_inactive]: inactive,
    [styles.root_link_disabled]: disabled,
    [className]: !_.isEmpty(className),
  });

  const props = {
    className: buttonClassName,
    disabled,
    href,
    to,
    onClick,
    children,
    title,
    ...allProps,
  };

  if (href) {
    return linkComponent(props);
  }

  if (to) {
    return navLinkComponent(props);
  }

  return buttonComponent(props);
};

export default Button;
