
export function Button({ className, ...props }) {
  return (
    <button
      className={\`bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-md \${className || ""}\`}
      {...props}
    />
  )
}
