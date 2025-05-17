
export function Card({ children, className }) {
  return (
    <div className={\`bg-neutral-800 shadow-md rounded-xl border border-neutral-700 \${className || ""}\`}>
      {children}
    </div>
  )
}

export function CardContent({ children, className }) {
  return (
    <div className={\`p-4 \${className || ""}\`}>
      {children}
    </div>
  )
}
