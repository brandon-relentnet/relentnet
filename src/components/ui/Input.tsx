import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = '', ...props }: InputProps) {
  return (
    <input
      className={`w-full bg-black/20 border border-white/10 p-3 text-sm focus:border-[#E1BE4C] focus:outline-hidden transition-colors text-white autofill:bg-neutral-900 ${className}`}
      {...props}
    />
  )
}
