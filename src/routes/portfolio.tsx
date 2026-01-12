import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portfolio')({
  component: Portfolio,
})

function Portfolio() {
  return <div className="p-2">Hello from Portfolio!</div>
}
