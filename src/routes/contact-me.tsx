import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contact-me"!</div>
}
