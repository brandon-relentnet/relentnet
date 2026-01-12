import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/client-portal')({
  component: ClientPortal,
})

function ClientPortal() {
  return <div className="p-2">Hello from Client Portal!</div>
}
