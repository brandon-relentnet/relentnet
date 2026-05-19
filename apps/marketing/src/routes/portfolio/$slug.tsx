import { createFileRoute, notFound } from '@tanstack/react-router'

import { getCaseStudyBySlug } from '@/data/caseStudies'

export const Route = createFileRoute('/portfolio/$slug')({
  loader: ({ params }) => {
    const study = getCaseStudyBySlug(params.slug)
    if (!study) {
      throw notFound()
    }
    return study
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.meta.title },
          { name: 'description', content: loaderData.meta.description },
        ]
      : [],
  }),
  component: CaseStudyDetailPage,
})

function CaseStudyDetailPage() {
  const study = Route.useLoaderData()
  return (
    <div className="min-h-screen px-6 md:px-12 py-32 text-ink">
      <h1 className="font-serif text-4xl">{study.name}</h1>
      <p className="mt-4 text-ink-sub">{study.hero.tagline}</p>
    </div>
  )
}
