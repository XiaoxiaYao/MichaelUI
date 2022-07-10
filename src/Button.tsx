import React, { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const Button = ({
  children,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return <button {...props}>{children}</button>;
};
