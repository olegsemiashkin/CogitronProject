
export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={`w-full p-2 border border-gray-300 rounded-md shadow-sm resize-y ${className || ""}`}
      {...props}
    />
  )
}
