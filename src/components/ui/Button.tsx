import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline'
  fullWidth?: boolean
}

export function Button({
  className = '',
  variant = 'primary',
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'uppercase tracking-widest transition-all duration-300'

  const variants = {
    primary:
      'bg-[#E1BE4C] text-black font-bold py-4 px-8 hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed',
    outline:
      'border border-white/20 px-6 py-3 text-xs hover:bg-[#E1BE4C] hover:border-[#E1BE4C] hover:text-black',
  }

  const widthStyles = fullWidth ? 'w-full' : ''

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
