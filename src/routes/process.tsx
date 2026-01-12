import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/process')({
  component: Process,
})

function Process() {
  return <div className="p-2">Hello from Process!</div>
}
