import React from 'react'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full bg-black/20 border border-white/10 p-3 text-sm focus:border-[#E1BE4C] focus:outline-hidden transition-colors text-white resize-none ${className}`}
      {...props}
    />
  )
}
