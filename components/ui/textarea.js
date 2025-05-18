
import React from 'react'

export function Textarea({ className = '', ...props }) {
  return (
    <textarea
      className={"w-full p-2 bg-neutral-800 border border-neutral-700 rounded-md text-white shadow-sm resize-y " + className}
      {...props}
    />
  )
}
