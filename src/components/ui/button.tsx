import React, { cloneElement, isValidElement } from 'react'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  variant?: 'default' | 'secondary'
  size?: 'default' | 'lg'
}

const base = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:opacity-50 disabled:pointer-events-none'
const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  default: 'bg-white text-neutral-900 hover:bg-neutral-200',
  secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
}
const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  default: 'h-10 px-4 py-2 rounded-xl text-sm',
  lg: 'h-12 px-6 py-3 rounded-2xl text-base',
}

export function Button({ asChild, className, variant = 'default', size = 'default', children, ...rest }: ButtonProps) {
  const classes = clsx(base, variants[variant], sizes[size], className)

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<any>, {
      className: clsx((children as any).props?.className, classes),
    })
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}

export default Button
